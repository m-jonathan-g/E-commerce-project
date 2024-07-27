import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { handleProductRoutes } from './Routes';
import authRoutes from './Routes/AuthRoutes'

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'))


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

app.use('/api', authRoutes);
handleProductRoutes(app);

const PORT: string | number = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});