import { useQuery } from '@tanstack/react-query';
import { alchemy } from '../alchemy';

interface TokenInfo {
    symbol: string;
    contract: string;
}

const fetchTokensMetadata = async (tokens: TokenInfo[]) => {
    return Promise.all(
        tokens.map(async ({ symbol, contract }) => {
            try {
                const data = await alchemy.core.getTokenMetadata(contract);
                return { symbol, data };
            } catch (err) {
                // eslint-disable-next-line no-console
                console.error(`Error fetching metadata for ${symbol}`, err);
                return { symbol, data: null };
            }
        })
    );
};

export const useTokensMetadata = (tokens: TokenInfo[]) => {
    return useQuery({
        queryKey: ['tokenMetadata'],
        queryFn: () => fetchTokensMetadata(tokens),
        enabled: tokens.length > 0,
    });
};
