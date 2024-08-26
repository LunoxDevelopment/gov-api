import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../../prisma/generated/org-db';
import cors from '../../../../lib/init-middleware';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Apply CORS middleware
    await cors(req, res);

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, msg: 'Method not allowed' });
    }

    const { short_code, name_en, category_id, district_id, name_sin, name_tm, address, email, contact, subject, description } = req.body;

    // Validate required fields
    if (!short_code || !name_en || !category_id) {
        return res.status(400).json({ success: false, msg: 'short_code, name_en, and category_id are required' });
    }

    try {
        // Convert category_id to an integer
        const categoryIdInt = parseInt(category_id, 10);

        if (isNaN(categoryIdInt)) {
            return res.status(400).json({ success: false, msg: 'Invalid category_id provided' });
        }

        // Fetch the category to get its short_code
        const category = await prisma.category.findUnique({
            where: { id: categoryIdInt },
        });

        if (!category) {
            return res.status(404).json({ success: false, msg: 'Category not found' });
        }

        const categoryShortCode = category.short_code;

        // Ensure that the combination of category_short_code and organization_short_code is unique
        const existingOrganization = await prisma.organization.findFirst({
            where: {
                short_code: short_code,
                category_id: categoryIdInt
            },
        });

        if (existingOrganization) {
            return res.status(400).json({
                success: false,
                msg: `The combination of ${categoryShortCode}_${short_code} already exists`,
            });
        }

        // Create the new organization
        const newOrganization = await prisma.organization.create({
            data: {
                short_code,
                name_en,
                category_id: categoryIdInt,
                district_id: district_id ? parseInt(district_id, 10) : null,
                name_sin: name_sin || null,
                name_tm: name_tm || null,
                address: address || null,
                email: email || null,
                contact: contact || null,
                description: description || null,
            },
        });

        res.status(201).json({
            success: true,
            msg: 'Organization added successfully',
            data: newOrganization,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
