// Types for data models used in the application
export interface TokenPrice {
    currency: string;
    value: string;
    lastUpdatedAt: string;
}

export interface TokenPriceData {
    symbol: string;
    prices: TokenPrice[];
    error: string | null;
}

export interface ChartDataPoint {
    timestamp: string;
    value: string;
}
