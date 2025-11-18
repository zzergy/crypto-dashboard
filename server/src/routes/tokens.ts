import express from 'express';
import chalk from 'chalk';
import { fetchTokensMetadata } from '../repositories';

export const tokensRouter = express.Router();

tokensRouter.post('/metadata', async (req, res) => {
    const tokens = req.body;

    if (!tokens || !Array.isArray(tokens)) {
        console.error(chalk.red('Invalid tokens parameter:'), tokens);
        return res.status(400).json({ error: 'Invalid tokens parameter' });
    }

    try {
        const metadata = await fetchTokensMetadata(tokens);
        res.json({ data: metadata });
    } catch (err) {
        const error: Error = err as Error;

        console.error(chalk.red('Internal server error:'), error);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
});
