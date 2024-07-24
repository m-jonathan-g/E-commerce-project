
export interface ProductType {
    name:string;
    description: string;
    price: number;
    category: string;
    productionDate: Date;
    images: Image[];
}

export interface Image extends Document {
    path: string;
    originalName: string;
    mimeType: string
}

