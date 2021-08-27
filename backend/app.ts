import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.config.js';
import userRoutes from './routers/users/user-routes.js';

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'https://ibmessenger.vercel.app'],
}));

app.use('/api/v1/users', userRoutes);

export default app;