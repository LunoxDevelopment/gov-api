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
        // Fetch organizations with related district, province, and category data
        const organizations = await prisma.organization.findMany({
            include: {
                category: {
                    select: {
                        id: true,
                        name: true,
                        short_code: true,
                    },
                },
                district: {
                    select: {
                        id: true,
                        name: true,
                        province: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
            },
            orderBy: {
                name_en: 'asc',
            },
        });

        // Format the response data
        const formattedOrganizations = organizations.map(org => {
            const site_code = `${org.category?.short_code || ''}_${org.short_code || ''}`;
            return {
                id: org.id,
                short_code: org.short_code,
                name_en: org.name_en,
                name_sin: org.name_sin,
                name_tm: org.name_tm,
                address: org.address,
                email: org.email,
                contact: org.contact,
                category: {
                    id: org.category?.id,
                    name: org.category?.name,
                },
                district: {
                    id: org.district?.id,
                    name: org.district?.name,
                },
                province: {
                    id: org.district?.province?.id,
                    name: org.district?.province?.name,
                },
                description: org.description,
                site_code,
            };
        });

        res.status(200).json({
            success: true,
            msg: 'Organizations fetched successfully',
            data: formattedOrganizations,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
