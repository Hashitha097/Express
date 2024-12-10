import express, {Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import CategoryRoutes from './routes/CategoryRoutes';
import ProductRoutes from './routes/ProductRoutes';
import UserRoutes from './routes/UserRoutes';

dotenv.config();

const app: Application = express();

app.use(express.json());

connectDB();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.use('/api', CategoryRoutes);
app.use('/api', ProductRoutes);
app.use('/api', UserRoutes);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
