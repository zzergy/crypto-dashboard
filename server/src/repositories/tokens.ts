import {
    GetMultipleHistoricalPriceBySymbolPayload,
    HistoryPoint,
    TokenHistoricalData,
    TokenMetadata,
} from '../types';
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

export const fetchHistoricalPricesBySymbol = async (
    payload: GetMultipleHistoricalPriceBySymbolPayload
) => {
    const results = await Promise.all(
        payload.symbols.map((symbol) =>
            alchemy.prices.getHistoricalPriceBySymbol(
                symbol,
                payload.startDate,
                payload.endDate,
                payload.interval
            )
        )
    );

    const data: Record<string, TokenHistoricalData> = {};

    payload.symbols.forEach((symbol, index) => {
        // cast the data array to HistoryPoint[]
        data[symbol] = {
            ...results[index],
            data: results[index].data as HistoryPoint[],
        };
    });

    return data;
};

export const fetchCurrentTokenPrices = async (symbols: string[]) => {
    const response = await alchemy.prices.getTokenPriceBySymbol(symbols);
    const formattedPrices = response.data.map((token) => ({
        symbol: token.symbol,
        price: parseFloat(token.prices[0]?.value || '0'),
    }));
    return formattedPrices;
};
