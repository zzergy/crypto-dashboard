import { HistoricalPriceInterval } from 'alchemy-sdk';
import { TokenPriceData } from './models';

// Types for API requests and responses

export interface GetTokenPriceBySymbolRequest {
    symbols: string[];
}

export interface GetTokenPriceBySymbolResponse {
    data: TokenPriceData[];
}

export interface GetTableContentPayload {
    symbols: string[];
    startDate: string;
    endDate: string;
    interval: HistoricalPriceInterval;
}
export interface GetSingleTokenPriceHistoryPayload {
    symbol: string;
    interval: HistoricalPriceInterval;
}

export interface RegisterUserPayload {
    username: string;
    email: string;
    password: string;
}
