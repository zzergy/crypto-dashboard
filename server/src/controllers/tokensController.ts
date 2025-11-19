import chalk from 'chalk';
import {
    fetchCurrentTokenPrices,
    fetchHistoricalPricesBySymbol,
    fetchTokenNews,
    fetchTokensMetadata,
} from '../repositories';
import { Request, Response } from 'express';
import { calculateChanges, HistoryPoint } from '../utils/calculateTokenChanges';
import { TOP_ETHEREUM_TOKENS } from '../types';

export const getTokensMetadata = async (req: Request, res: Response) => {
    const tokens = req.body;

    if (!tokens || !Array.isArray(tokens)) {
        console.error(chalk.red('Invalid tokens parameter:'), tokens);
        return res.status(400).json({ error: 'Invalid tokens parameter' });
    }

    try {
        const metadata = await fetchTokensMetadata(tokens);
        res.json(metadata);
    } catch (err) {
        const error: Error = err as Error;

        console.error(chalk.red('Internal server error:'), error);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
};

export const getTokenNews = async (req: Request, res: Response) => {
    const tokenSymbol = req.query.tokenSymbol as unknown as string;

    try {
        const response = await fetchTokenNews(tokenSymbol);
        const news = await response;

        res.json(news);
    } catch (err) {
        const error: Error = err as Error;

        console.error(chalk.red('Internal server error:'), error);

        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
};

export const getTokenTableContent = async (req: Request, res: Response) => {
    const payload = req.body;

    if (!payload) {
        console.error(chalk.red('Invalid payload:'), payload);
        return res.status(400).json({ error: 'Invalid payload' });
    }

    try {
        const metadata = await fetchTokensMetadata(TOP_ETHEREUM_TOKENS);
        const historyPrices = await fetchHistoricalPricesBySymbol(payload);
        const tokensCurrentPrices = await fetchCurrentTokenPrices(
            TOP_ETHEREUM_TOKENS.map((token) => token.symbol)
        );

        if (!tokensCurrentPrices || !metadata || !historyPrices) {
            return res.status(400).json({
                error: 'Error fetching: token metadata or historyPrices or tokensCurrentPrices',
            });
        }

        const rows = tokensCurrentPrices.map((token) => {
            const meta = metadata.find(
                (metadata) => metadata.symbol === token.symbol
            )?.data;

            const priceHistory =
                (historyPrices[token.symbol]?.data as HistoryPoint[]) || [];

            const { change24h, change7d } = calculateChanges(
                priceHistory,
                token.price
            );

            const prices = priceHistory
                .map((p) => parseFloat(p.value))
                .filter((v) => !isNaN(v));
            const ath = prices.length ? Math.max(...prices) : null;
            const atl = prices.length ? Math.min(...prices) : null;

            return {
                id: token.symbol,
                symbol: token.symbol,
                name: meta?.name || token.symbol,
                logo: meta?.logo || null,
                price: token.price,
                change24h,
                change7d,
                ath,
                atl,
            };
        });

        res.json(rows);
    } catch (err) {
        const error: Error = err as Error;

        console.error(chalk.red('Internal server error:'), error);
        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
};
