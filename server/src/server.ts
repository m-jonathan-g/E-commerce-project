import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const uri: string =
    process.env.MONGODB_URI || 'mongodb+srv://BlueFarm:Yo5bqOKyzZK0go8T@cluster81.rlgyr0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster81';

(async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to the database');
    } catch(error) {
        console.error(error);
    }
})();

app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json('Server is running');
});

const PORT: string | number = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});