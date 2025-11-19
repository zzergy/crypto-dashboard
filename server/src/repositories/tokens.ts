import { TokenMetadata } from '../types';
import { alchemy } from './alchemy';

export const fetchTokensMetadata = async (tokens: TokenMetadata[]) => {
    return Promise.all(
        tokens.map(async ({ symbol, contract }) => {
            try {
                const data = await alchemy.core.getTokenMetadata(contract);
                return { symbol, data };
            } catch (err) {
                console.error(`Error fetching metadata for ${symbol}`, err);
                return { symbol, data: null };
            }
        })
    );
};

export const fetchTokenNews = async (symbol: string) => {
    const apiKey = process.env.GNEWS_API_KEY;
    const query = encodeURIComponent(`${symbol} token crypto`);

    const res = await fetch(
        `https://gnews.io/api/v4/search?q=${query}&token=${apiKey}&lang=en`
    );

    if (!res.ok) throw new Error('Failed to fetch news');

    const data = await res.json();
    return data.articles;
};
