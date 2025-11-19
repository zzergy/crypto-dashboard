import { useQuery } from '@tanstack/react-query';
import { GetSingleTokenPriceHistoryPayload, TOKEN_CHART } from '../../types';

const getSingleTokenPriceHistory = async (
    payload: GetSingleTokenPriceHistoryPayload
) => {
    const response = await fetch(TOKEN_CHART, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    const tokenPriceHistory = await response.json();
    return tokenPriceHistory;
};

export const useTokenPriceHistory = (
    payload: GetSingleTokenPriceHistoryPayload
) => {
    return useQuery({
        queryKey: ['tokenPriceHistory', payload],
        queryFn: () => getSingleTokenPriceHistory(payload),
        staleTime: 60 * 60 * 1000, // 1 hour
        refetchInterval: 60 * 60 * 1000, // refetch every 1 hour
    });
};
