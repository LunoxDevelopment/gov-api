import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../../prisma/generated/org-db';
import cors from '../../../../lib/init-middleware';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await cors(req, res);

    if (req.method !== 'PUT') {
        return res.status(405).json({ success: false, msg: 'Method not allowed' });
    }

    const { id, name, description, short_code } = req.body;

    if (!id || !name) {
        return res.status(400).json({ success: false, msg: 'ID and name are required' });
    }

    try {
        const existingCategory = await prisma.category.findUnique({
            where: { id: Number(id) },
        });

        if (!existingCategory) {
            return res.status(404).json({ success: false, msg: 'Category not found' });
        }

        if (short_code && short_code !== existingCategory.short_code) {
            const shortCodeExists = await prisma.category.findFirst({
                where: { short_code },
            });

            if (shortCodeExists) {
                return res.status(400).json({
                    success: false,
                    msg: `Category with short_code "${short_code}" already exists`,
                });
            }
        }

        const updatedCategory = await prisma.category.update({
            where: { id: Number(id) },
            data: {
                name,
                description: description || null,
                short_code: short_code || null,
            },
        });

        res.status(200).json({
            success: true,
            msg: 'Category updated successfully',
            data: updatedCategory,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
