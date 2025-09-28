import { useQuery } from '@tanstack/react-query';
import { alchemy } from '../alchemy';
import { GetMultipleHistoricalPriceBySymbolPayload } from '../../types';

export type HistoryPoint = { value: string; timestamp: string };

export type TokenHistoricalData = {
    symbol: string;
    currency: string;
    data: HistoryPoint[];
};

export const useMultipleTokenPriceHistory = (
    payload: GetMultipleHistoricalPriceBySymbolPayload
) => {
    return useQuery<Record<string, TokenHistoricalData>, Error>({
        queryKey: [
            'multipleTokensPriceHistory',
            payload.symbols.join(','),
            payload.startDate,
            payload.endDate,
            payload.interval,
        ],
        queryFn: async () => {
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
        },
        staleTime: 60 * 60 * 1000, // 1 hour
        refetchInterval: 60 * 60 * 1000, // refetch every 1 hour
    });
};
