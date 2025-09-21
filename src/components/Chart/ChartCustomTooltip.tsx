import { Box } from '@mui/material';

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

export default CustomTooltip;
