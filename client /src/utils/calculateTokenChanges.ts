export type HistoryPoint = { value: string; timestamp: string };

export const calculateChanges = (
    history: HistoryPoint[],
    currentPrice: number
) => {
    if (!history?.length) return { change24h: null, change7d: null };

    const price24hAgo =
        history.length > 1
            ? parseFloat(history[history.length - 2].value)
            : null;

    const price7dAgo = parseFloat(history[0].value);

    const change24h =
        price24hAgo && price24hAgo > 0
            ? ((currentPrice - price24hAgo) / price24hAgo) * 100
            : null;

    const change7d =
        price7dAgo && price7dAgo > 0
            ? ((currentPrice - price7dAgo) / price7dAgo) * 100
            : null;

    return { change24h, change7d };
};
