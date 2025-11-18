import { TokenMetadata } from '../types';
import { alchemy } from './alchemy';

export const fetchTokensMetadata = async (tokens: TokenMetadata[]) => {
    return Promise.all(
        tokens.map(async ({ symbol, contract }) => {
            try {
                const data = await alchemy.core.getTokenMetadata(contract);
                return { symbol, data };
            } catch (err) {
                console.error(`Error fetching metadata for ${symbol}`, err);
                return { symbol, data: null };
            }
        })
    );
};
