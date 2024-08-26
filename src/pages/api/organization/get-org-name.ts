import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../prisma/generated/org-db';
import cors from '../../../lib/init-middleware';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Apply CORS middleware
    await cors(req, res);

    const { site_code } = req.query;

    if (!site_code || typeof site_code !== 'string') {
        return res.status(400).json({ success: false, msg: "Site code is required", data: null });
    }

    const [categoryShortCode, organizationShortCode] = site_code.split('_');
    if (!categoryShortCode || !organizationShortCode) {
        return res.status(400).json({ success: false, msg: "Invalid site code format", data: null });
    }

    try {
        const categories = await prisma.category.findMany({
            where: { short_code: categoryShortCode }
        });

        if (categories.length === 0) {
            return res.status(404).json({ success: false, msg: "Category not found", data: null });
        }

        const categoryIds = categories.map((cat) => cat.id);

        const organizations = await prisma.organization.findMany({
            where: {
                category_id: { in: categoryIds },
                short_code: organizationShortCode
            },
            orderBy: {
                name_en: 'asc'
            }
        });

        if (organizations.length === 0) {
            return res.status(404).json({ success: false, msg: "Organization not found", data: null });
        }

        const organization = organizations[0];
        const isDuplicate = organizations.length > 1;

        const response = {
            site_code,
            name: organization.name_en,
            category: categories.find((cat) => cat.id === organization.category_id)?.name,
            ...(isDuplicate && { duplicate: true })
        };

        res.status(200).json({ success: true, msg: "Organization fetched successfully", data: response });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
