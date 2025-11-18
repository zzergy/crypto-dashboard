import { Box, Stack, Typography } from '@mui/material';
import {
    AccessTime as AccessTimeIcon,
    LightbulbOutlined as LightbulbIcon,
    Assessment as AssessmentIcon,
    Newspaper as NewspaperIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import SectionWrapper from '../SectionWrapper';
import cryptoNewsImg from '../../assets/crypto-news.jpg';
import realTimeTokenPricesImg from '../../assets/real-time-token-prices.jpg';
import tokenInsightsImg from '../../assets/token-insights.jpg';
import detailsImg from '../../assets/details.jpg';
import { palette } from '../../styles/theme/palette';
import pattern from '../../assets/pattern.svg';

const features = [
    {
        icon: <AccessTimeIcon sx={{ fontSize: 40, color: palette.primary }} />,
        title: 'Real-Time Token Prices',
        description:
            'Stay ahead of the market with live updates on cryptocurrency prices. Track multiple tokens simultaneously, view historical price charts, and get instant notifications for price changes, so you never miss an opportunity.',
        media: realTimeTokenPricesImg,
    },
    {
        icon: <AssessmentIcon sx={{ fontSize: 40, color: palette.primary }} />,
        title: 'Comprehensive Token Data',
        description:
            'View detailed information for each token including price changes, all-time high and low, market cap, trading volume, and liquidity. Make informed decisions with in-depth metrics at your fingertips.',
        media: detailsImg,
    },
    {
        icon: <LightbulbIcon sx={{ fontSize: 40, color: palette.primary }} />,
        title: 'Token Insights & Explanations',
        description:
            'Understand what each metric means, from price trends to market capitalization. Our insights help you interpret data clearly, enabling smarter trading decisions and better risk management strategies.',
        media: tokenInsightsImg,
    },
    {
        icon: <NewspaperIcon sx={{ fontSize: 40, color: palette.primary }} />,
        title: 'Latest Crypto News',
        description:
            'Get curated news for every token you track, including market updates, regulation news, and expert analysis. Stay informed about key events that may impact the crypto landscape.',
        media: cryptoNewsImg,
    },
];

const FeaturesSection = () => {
    return (
        <Box
            sx={{
                py: 12,
                backgroundImage: `url("${pattern}")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '534px 296px',
                overflow: 'hidden',
            }}
        >
            <motion.section
                variants={staggerContainer(0.2, 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <motion.div variants={textVariant(0)}>
                    <Box textAlign="center" mb={8}>
                        <Typography
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                fontSize: { xs: '2.5rem', md: '3rem' },
                                color: palette.primary,
                            }}
                        >
                            Features
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ mt: 2, fontSize: '1.1rem' }}
                        >
                            All the tools you need to stay on top of the crypto
                            market
                        </Typography>
                    </Box>
                </motion.div>

                <Stack spacing={{ xs: 8, md: 14 }} px={{ xs: 2, md: 16 }}>
                    {features.map((feature, index) => {
                        const isEven = index % 2 === 1;

                        return (
                            <motion.div
                                key={feature.title}
                                variants={fadeIn(
                                    isEven ? 'right' : 'left',
                                    'spring',
                                    index * 0.3,
                                    0.8
                                )}
                            >
                                <Box
                                    display="flex"
                                    flexDirection={{
                                        xs: 'column',
                                        md: isEven ? 'row-reverse' : 'row',
                                    }}
                                    alignItems="center"
                                    gap={{ xs: 2, md: 4 }}
                                    width="100%"
                                >
                                    {/* Image with subtle glow */}
                                    <Box maxWidth={{ xs: '100%', md: '50%' }}>
                                        <img
                                            src={feature.media}
                                            alt={feature.title}
                                            style={{
                                                width: '100%',
                                                height: '300px',
                                                objectFit: 'cover',
                                                borderRadius: '12px',
                                            }}
                                        />
                                    </Box>

                                    {/* Text next to image */}
                                    <Box
                                        flex="0 0 50%"
                                        textAlign={{
                                            xs: 'center',
                                            md: isEven ? 'right' : 'left',
                                        }}
                                    >
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            gap={1}
                                            mb={2}
                                            sx={{
                                                background:
                                                    palette.gradients.primary,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor:
                                                    'transparent',
                                            }}
                                            justifyContent={{
                                                xs: 'center',
                                                md: isEven
                                                    ? 'flex-end'
                                                    : 'flex-start',
                                            }}
                                        >
                                            {feature.icon}
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    color: '#FFFFFF',
                                                    fontWeight: 'bold',
                                                    fontSize: {
                                                        xs: '1.5rem',
                                                        md: '1.6rem',
                                                    },
                                                }}
                                            >
                                                {feature.title}
                                            </Typography>
                                        </Box>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: '#CCCCCC',
                                                fontSize: {
                                                    xs: '1.05rem',
                                                    md: '1.1rem',
                                                },
                                            }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        );
                    })}
                </Stack>
            </motion.section>
        </Box>
    );
};

const WrappedFeatures = SectionWrapper({
    Component: FeaturesSection,
    idName: 'features',
});

export default WrappedFeatures;
