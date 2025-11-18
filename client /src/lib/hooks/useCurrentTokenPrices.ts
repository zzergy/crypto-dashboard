import { useQuery } from '@tanstack/react-query';
import { alchemy } from '../alchemy';

interface TokenPrice {
    symbol: string;
    price: number;
}

export const useCurrentTokenPrices = (symbols: string[]) => {
    return useQuery<TokenPrice[], Error>({
        queryKey: ['currentTokenPrices', symbols],
        queryFn: async () => {
            const response =
                await alchemy.prices.getTokenPriceBySymbol(symbols);
            const formattedPrices = response.data.map((token) => ({
                symbol: token.symbol,
                price: parseFloat(token.prices[0]?.value || '0'),
            }));
            return formattedPrices;
        },
        enabled: symbols.length > 0,
        staleTime: 60 * 60 * 1000, // 1 hour
        refetchInterval: 60 * 60 * 1000, // refetch every 1 hour
    });
};
