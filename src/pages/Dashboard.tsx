import { Box } from '@mui/material';
import { Chart, TokenTable } from '../components';

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
        </Box>
    );
};

export default Dashboard;
