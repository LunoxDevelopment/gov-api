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

    const { name, province_id } = req.body;

    // Validate required fields
    if (!name || !province_id) {
        return res.status(400).json({ success: false, msg: 'name and province_id are required' });
    }

    try {
        // Convert province_id to an integer
        const provinceIdInt = parseInt(province_id, 10);

        // Check if the conversion was successful
        if (isNaN(provinceIdInt)) {
            return res.status(400).json({ success: false, msg: 'province_id must be a valid integer' });
        }

        // Create the new district
        const newDistrict = await prisma.district.create({
            data: {
                name,
                province_id: provinceIdInt,
            },
        });

        res.status(201).json({
            success: true,
            msg: 'District added successfully',
            data: newDistrict,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
