import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../../prisma/generated/org-db';
import cors from '../../../../lib/init-middleware';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Apply CORS middleware
    await cors(req, res);

    // Only allow PUT requests
    if (req.method !== 'PUT') {
        return res.status(405).json({ success: false, msg: 'Method not allowed' });
    }

    const { id, site_code, new_short_code } = req.body;

    if ((!id && !site_code) || !new_short_code) {
        return res.status(400).json({ success: false, msg: 'Either id or site_code and new_short_code are required' });
    }

    try {
        let organization;

        if (id) {
            // Find the organization by id
            organization = await prisma.organization.findFirst({
                where: { id: parseInt(id) },
                include: {
                    category: true, // Ensure the category is included for site_code construction
                },
            });
        } else if (site_code) {
            // Split the site_code into categoryShortCode and organizationShortCode
            const [categoryShortCode, organizationShortCode] = site_code.split('_');

            // Find the category by short_code
            const category = await prisma.category.findFirst({
                where: { short_code: categoryShortCode },
            });

            if (!category) {
                return res.status(404).json({ success: false, msg: 'Category not found' });
            }

            // Find the organization by the original site_code
            organization = await prisma.organization.findFirst({
                where: {
                    short_code: organizationShortCode,
                    category_id: category.id,
                },
                include: {
                    category: true, // Ensure the category is included for site_code construction
                },
            });
        }

        if (!organization) {
            return res.status(404).json({ success: false, msg: 'Organization not found' });
        }

        // Check if the new combination of category_short_code and new_short_code is unique
        const existingOrganization = await prisma.organization.findFirst({
            where: {
                short_code: new_short_code,
                category_id: organization.category_id,
            },
        });

        if (existingOrganization) {
            const categoryShortCode = organization.category?.short_code || '';
            return res.status(400).json({
                success: false,
                msg: `The combination of ${categoryShortCode}_${new_short_code} already exists`,
            });
        }

        // Update the organization's short_code
        const updatedOrganization = await prisma.organization.update({
            where: { id: organization.id },
            data: {
                short_code: new_short_code,
            },
        });

        res.status(200).json({
            success: true,
            msg: 'Organization site code updated successfully',
            data: updatedOrganization,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
