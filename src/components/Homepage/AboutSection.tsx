import { Box, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../../utils/motion';
import { palette } from '../../styles/theme/palette';
import pattern from '../../assets/pattern.svg';

const pillars = [
    {
        title: 'Learn the Essentials',
        description:
            'Understand the fundamentals of blockchain, Ethereum, and the most traded tokens — without the jargon.',
    },
    {
        title: 'Simplify Crypto Data',
        description:
            'We turn complex market stats into clear visuals and explanations so you can focus on what matters.',
    },
    {
        title: 'Build Confidence',
        description:
            'Gain the knowledge and tools to make informed decisions as you explore the crypto world.',
    },
];

const AboutSection = () => {
    return (
        <Box
            sx={{
                py: 12,
                px: { xs: 3, md: 16 },
                position: 'relative',
                backgroundImage: `url("${pattern}")`,
                backgroundRepeat: 'repeat',
                backgroundSize: '534px 296px',
                overflow: 'hidden',
            }}
        >
            <motion.section
                variants={staggerContainer(0.2, 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                {/* Header */}
                <motion.div variants={textVariant(0)}>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            mb: 3,
                            lineHeight: 2,
                            fontSize: { xs: '2.3rem', md: '3rem' },
                            background: palette.gradients.primary,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Built for Curious Minds Entering Crypto
                    </Typography>

                    <Typography
                        variant="subtitle1"
                        sx={{
                            textAlign: 'center',
                            color: '#CCCCCC',
                            maxWidth: 700,
                            mx: 'auto',
                            mb: 8,
                            fontSize: '1.15rem',
                            lineHeight: 1.7,
                        }}
                    >
                        Our mission is to make crypto learning simple, visual,
                        and approachable. Whether you’re exploring Ethereum or
                        understanding stablecoins, we help you start smart and
                        grow with confidence.
                    </Typography>
                </motion.div>

                {/* Pillars */}
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={4}
                >
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
                            style={{ flex: 1 }}
                        >
                            <Box
                                sx={{
                                    backgroundColor: 'rgba(255,255,255,0.06)',
                                    borderRadius: 3,
                                    p: 4,
                                    height: '100%',
                                    transition:
                                        'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 2,
                                        fontWeight: 'bold',
                                        background: palette.gradients.primary,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    {pillar.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: '#CCCCCC',
                                        fontSize: '1.05rem',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {pillar.description}
                                </Typography>
                            </Box>
                        </motion.div>
                    ))}
                </Stack>
            </motion.section>
        </Box>
    );
};

export default AboutSection;
