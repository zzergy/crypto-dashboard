import { Box } from '@mui/material';
import { Chart, Footer, TokenTable } from '../components';
import TokenNews from '../components/news';

const Dashboard = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={2}
            p={6}
        >
            <TokenTable />
            <Chart />
            <TokenNews symbol="ETH" />
            <Footer />
        </Box>
    );
};

export default Dashboard;
