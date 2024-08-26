import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../../prisma/generated/org-db';
import cors from '../../../../lib/init-middleware';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Apply CORS middleware
    await cors(req, res);

    // Only allow DELETE requests
    if (req.method !== 'DELETE') {
        return res.status(405).json({ success: false, msg: 'Method not allowed' });
    }

    const { id, site_code } = req.body;

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

        // Delete the organization
        await prisma.organization.delete({
            where: { id: organization.id },
        });

        res.status(200).json({
            success: true,
            msg: 'Organization removed successfully',
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
