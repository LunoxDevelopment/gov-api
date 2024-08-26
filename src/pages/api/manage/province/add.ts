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

    const { name } = req.body;

    // Validate required fields
    if (!name) {
        return res.status(400).json({ success: false, msg: 'name is required' });
    }

    try {
        // Create the new province
        const newProvince = await prisma.province.create({
            data: {
                name,
            },
        });

        res.status(201).json({
            success: true,
            msg: 'Province added successfully',
            data: newProvince,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
