import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { palette } from '../../styles/theme/palette';

const stats = [
    { label: 'Network', value: 'Ethereum Mainnet' },
    { label: 'Tracked Tokens', value: '30+' },
    { label: 'Update Interval', value: 'Every 5s' },
    { label: 'Powered By', value: 'Alchemy' },
];

export const StatsSection = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            sx={{
                py: 16,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: { xs: 4, md: 16 },
                backgroundColor: '#0A0815',
            }}
        >
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            textAlign: 'center',
                            color: theme.palette.text.primary,
                            minWidth: 160,
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                mb: 2,
                                fontWeight: 700,
                                background: palette.gradients.primary,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {stat.value}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                opacity: 0.8,
                                mt: 1,
                            }}
                        >
                            {stat.label}
                        </Typography>
                    </Box>
                </motion.div>
            ))}
        </Box>
    );
};
export default StatsSection;
