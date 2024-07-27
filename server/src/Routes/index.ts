import { Express, Request, Response } from "express";
import productRoutes from './ProductRoute'


export function handleProductRoutes (app:Express) {
    
    app.get('/health', (req: Request, res: Response) => {
        res.status(200).json('Server is running');
    });

    app.use('/api', productRoutes);

}
