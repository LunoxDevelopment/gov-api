import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../../prisma/generated/org-db';
import cors from '../../../../lib/init-middleware';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Apply CORS middleware
    await cors(req, res);

    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, msg: 'Method not allowed' });
    }

    try {
        // Fetch all categories
        const categories = await prisma.category.findMany({
            orderBy: {
                name: 'asc',
            },
        });

        res.status(200).json({
            success: true,
            msg: 'Categories fetched successfully',
            data: categories,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
