import { HistoricalPriceInterval } from 'alchemy-sdk';
import { TokenPriceData } from './models';

// Types for API requests and responses

export interface GetTokenPriceBySymbolRequest {
    symbols: string[];
}

export interface GetTokenPriceBySymbolResponse {
    data: TokenPriceData[];
}

export interface GetMultipleHistoricalPriceBySymbolPayload {
    symbols: string[];
    startDate: string;
    endDate: string;
    interval: HistoricalPriceInterval;
}
export interface GetHistoricalPriceBySymbolPayload {
    symbol: string;
    interval: HistoricalPriceInterval;
}
