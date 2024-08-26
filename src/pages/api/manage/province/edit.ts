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

    const { id, name } = req.body;

    // Validate required fields
    if (!id) {
        return res.status(400).json({ success: false, msg: 'id is required' });
    }

    try {
        // Update the province details
        const updatedProvince = await prisma.province.update({
            where: { id },
            data: {
                name: name || undefined,
            },
        });

        res.status(200).json({
            success: true,
            msg: 'Province updated successfully',
            data: updatedProvince,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
