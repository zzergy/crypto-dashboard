import { Box } from '@mui/material';
import { Chart, TokenTable } from '../components';
import TokenNews from '../components/news';

const Dashboard = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            p={4}
        >
            <TokenTable />
            <Chart />
            <TokenNews symbol="ETH" />
        </Box>
    );
};

export default Dashboard;
