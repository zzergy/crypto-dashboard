import { useEffect, useState } from 'react';
import { alchemy } from '../alchemy';

interface TokenPrice {
    symbol: string;
    price: number;
}

export const useTokenPrices = (symbols: string[]) => {
    const [pricesList, setPricesList] = useState<TokenPrice[] | []>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (symbols.length === 0) return;

        const fetchTokenPrices = async () => {
            try {
                setLoading(true);
                setError(null);

                const response =
                    await alchemy.prices.getTokenPriceBySymbol(symbols);
                console.log(response);
                const formattedPrices = response.data.map((token) => ({
                    symbol: token.symbol,
                    price: parseFloat(token.prices[0]?.value || '0'),
                }));

                setPricesList(formattedPrices);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError('Failed to fetch token prices: ' + err.message);
                } else {
                    setError('Failed to fetch token prices');
                }

                setLoading(false);
                setPricesList([]);
            }
        };

        fetchTokenPrices();
    }, [symbols]);

    return { pricesList, loading, error };
};
