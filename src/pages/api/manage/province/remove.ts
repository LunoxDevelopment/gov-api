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

    const { id } = req.body;

    // Validate required fields
    if (!id) {
        return res.status(400).json({ success: false, msg: 'id is required' });
    }

    try {
        // Delete the province
        await prisma.province.delete({
            where: { id },
        });

        res.status(200).json({
            success: true,
            msg: 'Province removed successfully',
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
