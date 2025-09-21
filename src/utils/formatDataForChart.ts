import { HistoricalPriceDataPoint } from 'alchemy-sdk';

/**
 * Formats the data for chart representation.
 * @param data - The array of data points to format.
 */
export const formatDataForChart = (data: HistoricalPriceDataPoint[]) => {
    if (!data || data.length === 0) return [];

    return data.map((dataPoint) => ({
        date: dataPoint.timestamp,
        price: Number(dataPoint.value),
    }));
};
