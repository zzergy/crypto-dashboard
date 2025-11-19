import { Box, CircularProgress, Typography } from '@mui/material';
import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { HistoricalPriceInterval } from 'alchemy-sdk';
import CustomXAxis from './CustomXAxis';
import CustomTooltip from './ChartCustomTooltip';
import { useTokenPriceHistory } from '../../lib/hooks';
import { formatDataForChart } from '../../utils';
import { palette } from '../../styles/theme/palette';

const Chart = () => {
    const { data: tokenPriceHistory, isLoading } = useTokenPriceHistory({
        symbol: 'ETH',
        interval: HistoricalPriceInterval.ONE_HOUR,
    });

    if (!tokenPriceHistory) {
        return (
            <Box
                height={400}
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Typography>No chart data available.</Typography>
            </Box>
        );
    }

    const formattedData = formatDataForChart(tokenPriceHistory.data);
    const chartWidth = Math.max(formattedData.length * 120, 800);

    return (
        <>
            <Box
                sx={{
                    overflowX: 'auto',
                    px: 2,
                    py: 4,
                    width: '100%',
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 3,
                }}
            >
                {isLoading && (
                    <Box
                        height={400}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        gap={1}
                    >
                        <CircularProgress />
                        <Typography>Loading chart...</Typography>
                    </Box>
                )}

                <LineChart
                    width={chartWidth}
                    height={400}
                    data={formattedData}
                    margin={{ top: 20, right: 60, bottom: 20, left: 16 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis interval={0} dataKey="date" tick={<CustomXAxis />} />
                    <YAxis
                        domain={['auto', 'auto']}
                        tick={{
                            fill: 'white',
                            fontSize: 12,
                            fontFamily: 'Manrope',
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="price"
                        stroke={palette.primary}
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </Box>
        </>
    );
};

export default Chart;
