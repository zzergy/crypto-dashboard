import { HistoricalPriceDataPoint } from 'alchemy-sdk';

export const formatDataForChart = (data: HistoricalPriceDataPoint[]) => {
    if (!data || data.length === 0) return [];

    return data.map((dataPoint) => ({
        date: dataPoint.timestamp,
        price: Number(dataPoint.value),
    }));
};
