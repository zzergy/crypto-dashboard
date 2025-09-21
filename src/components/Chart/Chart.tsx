import { Box } from '@mui/material';
import {
    CartesianGrid,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import CustomXAxis from './CustomXAxis';

interface ChartProps {
    chartData: {
        date: string;
        price: number;
    }[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        const date = new Date(label);
        return (
            <Box
                sx={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: '12px',
                    borderRadius: '6px',
                    color: 'white',
                    fontSize: 12,
                    fontFamily: 'Manrope',
                }}
            >
                <div>
                    <strong>
                        {`Date: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                    </strong>
                </div>
                <div>
                    <strong>Time: </strong>
                    {`${date.getHours()}:00`}
                </div>
                <div>
                    <strong>Price: </strong>${payload[0].value.toFixed(5)}
                </div>
            </Box>
        );
    }
    return null;
};

const Chart = ({ chartData }: ChartProps) => {
    if (!chartData || chartData.length === 0) {
        return <Box>No data to display</Box>;
    }

    const chartWidth = Math.max(chartData.length * 120, 800);

    return (
        <Box
            sx={{
                overflowX: 'auto',
                border: '1px solid #333',
                px: 2,
                py: 4,
                borderRadius: 4,
                width: '80%',
            }}
        >
            <LineChart
                width={chartWidth}
                height={400}
                data={chartData}
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
                    stroke="#8533ff"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </Box>
    );
};

export default Chart;
