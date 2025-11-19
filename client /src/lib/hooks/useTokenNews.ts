import { useQuery } from '@tanstack/react-query';
import { TOKEN_NEWS } from '../../types';

const fetchTokenNews = async (symbol: string) => {
    const res = await fetch(TOKEN_NEWS + `${symbol}`, {
        method: 'GET',
    });
    const news = await res.json();
    return news;
};

export const useTokenNews = (symbol: string) => {
    return useQuery({
        queryKey: ['tokenNews', symbol],
        queryFn: () => fetchTokenNews(symbol),
        enabled: !!symbol, // only fetch if symbol exists
        staleTime: 1000 * 60 * 5, // cache for 5 minutes
    });
};
