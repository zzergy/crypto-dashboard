import { useQuery } from '@tanstack/react-query';

import { GetTableContentPayload, TOKENS_TABLE_CONTENT } from '../../types';

export type HistoryPoint = { value: string; timestamp: string };

export type TokenHistoricalData = {
    symbol: string;
    currency: string;
    data: HistoryPoint[];
};

const getTokenTableContent = async (payload: GetTableContentPayload) => {
    const res = await fetch(TOKENS_TABLE_CONTENT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        throw new Error('Failed to fetch token metadata');
    }

    const data = await res.json();
    return data;
};

export const useTokenTableContent = (payload: GetTableContentPayload) => {
    return useQuery({
        queryKey: ['table-content', payload],
        queryFn: () => getTokenTableContent(payload),
        staleTime: 60 * 60 * 1000, // 1 hour
        refetchInterval: 60 * 60 * 1000, // refetch every 1 hour
    });
};
