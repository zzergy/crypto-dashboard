import { Alchemy, Network } from 'alchemy-sdk';

let alchemyInstance: Alchemy | null = null;

export const getAlchemy = () => {
    if (!alchemyInstance) {
        if (!process.env.ALCHEMY_API_KEY) {
            throw new Error('Missing ALCHEMY_API_KEY in environment');
        }

        alchemyInstance = new Alchemy({
            apiKey: process.env.ALCHEMY_API_KEY,
            network: Network.ETH_MAINNET,
        });
    }

    return alchemyInstance;
};
