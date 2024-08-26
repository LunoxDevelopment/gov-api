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
        return res.status(400).json({ success: false, msg: 'ID is required' });
    }

    try {
        // Find the existing category by ID
        const existingCategory = await prisma.category.findUnique({
            where: { id: Number(id) },
        });

        if (!existingCategory) {
            return res.status(404).json({ success: false, msg: 'Category not found' });
        }

        // Check if the category has associated organizations
        const associatedOrganizations = await prisma.organization.findMany({
            where: { category_id: Number(id) },
        });

        if (associatedOrganizations.length > 0) {
            return res.status(400).json({
                success: false,
                msg: 'Cannot delete category with associated organizations',
            });
        }

        // Delete the category
        await prisma.category.delete({
            where: { id: Number(id) },
        });

        res.status(200).json({
            success: true,
            msg: 'Category deleted successfully',
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
