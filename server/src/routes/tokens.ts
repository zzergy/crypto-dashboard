import express from 'express';
import {
    getTokenNews,
    getTokensMetadata,
    getTokenTableContent,
} from '../controllers';

export const tokensRouter = express.Router();

tokensRouter.post('/metadata', getTokensMetadata);

tokensRouter.get('/news', getTokenNews);

tokensRouter.post('/table-content', getTokenTableContent);
