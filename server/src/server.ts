import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import { tokensRouter } from './routes/tokens';
import { connectDB } from './db';
import { userRouter } from './routes/users';

const app = express();
const PORT = process.env.PORT || 8888;
const CLIENT_PORT = process.env.CLIENT_PORT || 5173;

connectDB();

app.use(express.json());
app.use(
    cors({
        origin: `http://localhost:${CLIENT_PORT}`,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

app.use('/api/user', userRouter);

app.use('/api/tokens', tokensRouter);

app.get('/api', (_req, res) => {
    res.json({ message: 'Crypto Dashboard Server is running' });
});

app.listen(PORT, () => {
    console.log(chalk.magenta(`Server running on http://localhost:${PORT}`));
});
