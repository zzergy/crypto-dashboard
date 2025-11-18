import { HistoricalPriceBySymbolResponse } from 'alchemy-sdk';
import { useQuery } from '@tanstack/react-query';
import { alchemy } from '../alchemy';
import { GetHistoricalPriceBySymbolPayload } from '../../types';
import { getTimeRange } from '../../utils';

export const useTokenPriceHistory = (
    payload: GetHistoricalPriceBySymbolPayload
) => {
    return useQuery<HistoricalPriceBySymbolResponse, Error>({
        queryKey: ['tokenPriceHistory', payload],
        queryFn: async () => {
            const { startDate: startTime, endDate: endTime } = getTimeRange(20);

            return alchemy.prices.getHistoricalPriceBySymbol(
                payload.symbol,
                startTime,
                endTime,
                payload.interval
            );
        },
        staleTime: 60 * 60 * 1000, // 1 hour
        refetchInterval: 60 * 60 * 1000, // refetch every 1 hour
    });
};
