import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../prisma/generated/org-db';
import cors from '../../../lib/init-middleware';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Apply CORS middleware
    await cors(req, res);

    try {
        const categories = await prisma.category.findMany();
        res.status(200).json({ success: true, msg: "Categories fetched successfully", data: categories });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
