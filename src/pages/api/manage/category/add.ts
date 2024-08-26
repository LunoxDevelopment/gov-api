import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../../prisma/generated/org-db';
import cors from '../../../../lib/init-middleware';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await cors(req, res);

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, msg: 'Method not allowed' });
    }

    const { name, description, short_code } = req.body;

    if (!name) {
        return res.status(400).json({ success: false, msg: 'Name is required' });
    }

    try {
        if (short_code) {
            const existingCategory = await prisma.category.findFirst({
                where: { short_code },
            });

            if (existingCategory) {
                return res.status(400).json({
                    success: false,
                    msg: `Category with short_code "${short_code}" already exists`,
                });
            }
        }

        const newCategory = await prisma.category.create({
            data: {
                name,
                description: description || null,
                short_code: short_code || null,
            },
        });

        res.status(201).json({
            success: true,
            msg: 'Category added successfully',
            data: newCategory,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
