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

    const { id, site_code, name_en, district_id, name_sin, name_tm, address, email, contact, description, category_id } = req.body;

    if (!id && !site_code) {
        return res.status(400).json({ success: false, msg: 'Either organization id or site_code is required' });
    }

    try {
        // Fetch the organization using id or site_code
        let organization;

        if (id) {
            organization = await prisma.organization.findUnique({
                where: { id },
            });
        } else if (site_code) {
            const [categoryShortCode, organizationShortCode] = site_code.split('_');
            const category = await prisma.category.findFirst({
                where: { short_code: categoryShortCode },
            });

            if (category) {
                organization = await prisma.organization.findFirst({
                    where: {
                        short_code: organizationShortCode,
                        category_id: category.id,
                    },
                });
            }
        }

        if (!organization) {
            return res.status(404).json({ success: false, msg: 'Organization not found' });
        }

        // If site_code is provided and the short_code is not blank, check for the new combination existence
        if (site_code && organization.short_code) {
            const [newCategoryShortCode, newOrganizationShortCode] = site_code.split('_');

            const newCategory = await prisma.category.findFirst({
                where: { short_code: newCategoryShortCode },
            });

            if (!newCategory) {
                return res.status(404).json({ success: false, msg: 'New category not found' });
            }

            const existingOrganization = await prisma.organization.findFirst({
                where: {
                    short_code: newOrganizationShortCode,
                    category_id: newCategory.id,
                },
            });

            if (existingOrganization && existingOrganization.id !== organization.id) {
                return res.status(400).json({
                    success: false,
                    msg: `The combination of ${newCategoryShortCode}_${newOrganizationShortCode} already exists`,
                });
            }

            // If no existing organization conflicts, proceed to update category_id and short_code
            organization = await prisma.organization.update({
                where: { id: organization.id },
                data: {
                    category_id: newCategory.id,
                    short_code: newOrganizationShortCode,
                },
            });
        }

        // Update the organization details (including category_id if provided)
        const updatedOrganization = await prisma.organization.update({
            where: { id: organization.id },
            data: {
                name_en: name_en || organization.name_en,
                district_id: district_id !== undefined ? district_id : organization.district_id,
                name_sin: name_sin !== undefined ? name_sin : organization.name_sin,
                name_tm: name_tm !== undefined ? name_tm : organization.name_tm,
                address: address !== undefined ? address : organization.address,
                email: email !== undefined ? email : organization.email,
                contact: contact !== undefined ? contact : organization.contact,
                description: description !== undefined ? description : organization.description,
                // Update category_id if provided
                ...(category_id && { category_id: category_id }),
            },
        });

        res.status(200).json({
            success: true,
            msg: 'Organization updated successfully',
            data: updatedOrganization,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
