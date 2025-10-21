// hooks/useTokenNews.ts
import { useQuery } from '@tanstack/react-query';

const fetchTokenNews = async (symbol: string) => {
    const apiKey = import.meta.env.VITE_GNEWS_API_KEY;
    const query = encodeURIComponent(`${symbol} token crypto`);
    const res = await fetch(
        `https://gnews.io/api/v4/search?q=${query}&token=${apiKey}&lang=en`
    );
    if (!res.ok) throw new Error('Failed to fetch news');
    const data = await res.json();
    return data.articles; // array of articles
};

export const useTokenNews = (symbol: string) => {
    return useQuery({
        queryKey: ['tokenNews', symbol],
        queryFn: () => fetchTokenNews(symbol),
        enabled: !!symbol, // only fetch if symbol exists
        staleTime: 1000 * 60 * 5, // cache for 5 minutes
    });
};
