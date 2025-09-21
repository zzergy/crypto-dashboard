import { useEffect, useState } from 'react';
import { alchemy } from '../alchemy';
import { HistoricalPriceBySymbolResponse } from 'alchemy-sdk';
import { GetHistoricalPriceBySymbolPayload } from '../../types';

export const usePricesHistory = (
    payload: GetHistoricalPriceBySymbolPayload
) => {
    const [history, setHistory] =
        useState<HistoricalPriceBySymbolResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchTokenPriceHistory = async () => {
            setLoading(true);

            try {
                const stats = await alchemy.prices.getHistoricalPriceBySymbol(
                    payload.symbol,
                    payload.startTime,
                    payload.endTime,
                    payload.interval
                );
                setHistory(stats);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching price history:', error);
                setLoading(false);
            }
        };

        fetchTokenPriceHistory();
    }, [payload]);

    return { history, loading };
};
