import { Box, Typography } from '@mui/material';
import { useMemo } from 'react';
import { HistoricalPriceInterval } from 'alchemy-sdk';
import { Chart } from '../components';
import { usePricesHistory, useTokenPrices } from '../lib/hooks';
import { formatDataForChart } from '../utils';

const Dashboard = () => {
    const payload = useMemo(() => ['ETH', 'USDT', 'BTC'], []);
    const historyPayload = useMemo(
        () => ({
            symbol: 'ETH',
            startTime: '2025-09-02T00:00:00.000Z',
            endTime: '2025-09-21T23:59:59.999Z',
            interval: HistoricalPriceInterval.ONE_DAY,
        }),
        []
    );
    const { pricesList } = useTokenPrices(payload);
    const { history } = usePricesHistory(historyPayload);

    return (
        <Box
            display={'flex'}
            flexDirection="column"
            alignItems="center"
            gap={2}
            p={4}
        >
            <Typography variant="body1">
                {pricesList.map((token) => (
                    <span key={token.symbol}>
                        {token.symbol}: ${token.price.toFixed(5)}
                        <br />
                    </span>
                ))}
            </Typography>

            {!history && <Typography>Loading chart data...</Typography>}
            {history && (
                <Chart chartData={formatDataForChart(history.data) || []} />
            )}
        </Box>
    );
};

export default Dashboard;
