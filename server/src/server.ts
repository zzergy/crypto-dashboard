import express from 'express';
import dotenv from 'dotenv';
import chalk from 'chalk';
import cors from 'cors';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8888;
const CLIENT_PORT = process.env.CLIENT_PORT || 5173;

app.use(express.json());
app.use(
    cors({
        origin: `http://localhost:${CLIENT_PORT}`,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
);

app.get('/api', (req, res) => {
    res.json({ message: 'Crypto Dashboard Server is running' });
});

app.listen(PORT, () => {
    console.log(chalk.magenta(`Server running on http://localhost:${PORT}`));
});
