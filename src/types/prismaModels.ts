export interface Category {
    id: number;
    name: string;
    short_code?: string | null;
    description?: string | null;
}

export interface Organization {
    id: number;
    name_en: string;
    short_code?: string | null;
    category_id?: number | null;
    category?: Category | null;
    district_id?: number | null;
    site_code?: string | null;
}


export interface District {
    id: number;
    name: string;
    province_id: number;
}

export interface Province {
    id: number;
    name: string;
}
