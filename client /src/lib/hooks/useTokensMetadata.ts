import { useQuery } from '@tanstack/react-query';
import { TOKENS_METADATA } from '../../types';

interface Token {
    symbol: string;
    contract: string;
}
interface TokenMetadata {
    decimals: number;
    logo: string;
    name: string;
    symbol: string;
}

interface TokenWithMetadata {
    symbol: string;
    data: TokenMetadata | null;
}

const fetchTokensMetadata = async (tokens: Token[]) => {
    const result = await fetch(TOKENS_METADATA, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tokens),
    });

    if (!result.ok) {
        throw new Error('Failed to fetch token metadata');
    }

    const data = await result.json();
    return data.data as TokenWithMetadata[];
};

export const useTokensMetadata = (tokens: Token[]) => {
    return useQuery({
        queryKey: ['tokenMetadata', tokens],
        queryFn: () => fetchTokensMetadata(tokens),
        enabled: tokens.length > 0,
    });
};
