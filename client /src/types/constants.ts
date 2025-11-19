export const topEthereumTokens: { symbol: string; contract: string }[] = [
    { symbol: 'ETH', contract: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
    { symbol: 'USDT', contract: '0xdac17f958d2ee523a2206206994597c13d831ec7' },
    { symbol: 'USDC', contract: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48' },
    { symbol: 'DAI', contract: '0x6b175474e89094c44da98b954eedeac495271d0f' },
    { symbol: 'WBTC', contract: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599' },
    { symbol: 'LINK', contract: '0x514910771af9ca656af840dff83e8264ecf986ca' },
    { symbol: 'UNI', contract: '0x5c69b4d2ecf4f3a9e7b3a6b6e4e5e3e3e3e3e3e3' },
    { symbol: 'AAVE', contract: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9' },
    { symbol: 'SUSHI', contract: '0x6b3595068778dd592e39a122f4f5c9e8e4d3fbb7' },
    { symbol: 'COMP', contract: '0xc00e94cb662c3520282e6f5717214004a7f26888' },
    { symbol: 'YFI', contract: '0x0bc529c00c6401aef6d220be8c6e2e6c8d69a27a' },
    { symbol: 'CRV', contract: '0xd533a949740bb3306d119cc777fa900ba034cd52' },
    { symbol: 'SNX', contract: '0xc011a72400e58ecd99ee497cf89e3775d4bd732f' },
    { symbol: 'BAT', contract: '0x0d8775f648430679a709e98d2b0cb6250d2887ef' },
    { symbol: '1INCH', contract: '0x111111111117dc0aa78b770fa6a738034120c302' },
    { symbol: 'ENJ', contract: '0xf629cbd94d379b6d5365e90e9b3b5d4f2f3b7b56' },
    { symbol: 'GRT', contract: '0xc944e90c64b2c07662a292be6244bdf05cda44a7' },
    { symbol: 'LRC', contract: '0x199e8b6b2d6b2b0b6b0b6b0b6b0b6b0b6b0b6b0b' },
];

export enum PageNames {
    HERO = 'hero',
    FEATURES = 'features',
}

export const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

export const TOKENS_METADATA = `${API_BASE_URL}/api/tokens/metadata`;
export const TOKEN_NEWS = `${API_BASE_URL}/api/tokens/news?tokenSymbol=`;
