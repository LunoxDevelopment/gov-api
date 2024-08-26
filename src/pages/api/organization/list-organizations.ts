import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../../../prisma/generated/org-db';
import { Organization, District, Province } from '../../../types/prismaModels';
import cors from '../../../lib/init-middleware';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Apply CORS middleware
    await cors(req, res);

    const { search = '', district = '', province = '', category = '' } = req.query;

    try {
        const organizations = await prisma.organization.findMany({
            where: {
                AND: [
                    {
                        name_en: {
                            contains: search as string,
                            mode: 'insensitive',
                        }
                    },
                    category ? {
                        category: {
                            name: {
                                contains: category as string,
                                mode: 'insensitive',
                            }
                        }
                    } : {}
                ]
            },
            include: {
                category: true
            },
            orderBy: {
                name_en: 'asc'
            }
        });

        const districts = await prisma.district.findMany();
        const provinces = await prisma.province.findMany();

        const districtMap = new Map(districts.map((d: District) => [d.id, d.name]));
        const provinceMap = new Map(provinces.map((p: Province) => [p.id, p.name]));

        const formattedOrganizations = organizations.map((org: Organization) => {
            const site_code = `${org.category?.short_code || ''}_${org.short_code || ''}`;
            const category = org.category ? org.category.name : null;

            const matchingDistricts = districts.filter((d: District) => d.province_id === org.category?.id);
            const districtNames = matchingDistricts.map((d: District) => d.name).join(', ');

            return {
                site_code,
                name: org.name_en,
                category,
                district: districtNames
            };
        });

        res.status(200).json({ success: true, msg: "Organizations fetched successfully", data: formattedOrganizations });
    } catch (error) {
        res.status(500).json({ success: false, msg: (error as Error).message, data: null });
    }
}
