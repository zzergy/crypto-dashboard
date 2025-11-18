import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import heroVideo from '../../assets/hero.mp4';
import GradientButton from '../GradientButton';
import SectionWrapper from '../SectionWrapper';
import { useScrollTo } from '../../utils';
import { PageNames } from '../../types';
import { palette } from '../../styles/theme/palette';

const HeroSection = () => {
    const scrollTo = useScrollTo();

    return (
        <Box
            position="relative"
            width="100%"
            height="100vh"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ backgroundColor: '#0F0A18' }}
        >
            <video
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                }}
            />
            <Box
                position="absolute"
                top={0}
                left={0}
                width="100%"
                height="100%"
                bgcolor="rgba(0,0,0,0.6)"
                zIndex={1}
            />
            <Box position="relative" zIndex={2} textAlign="center" px={2}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            background: palette.gradients.primary,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Track the Market. Stay Ahead.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <Typography variant="h5" sx={{ color: '#FFFFFF', mb: 4 }}>
                        From beginners to pros - crypto insights made simple.
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <GradientButton
                        onClick={() => scrollTo(PageNames.FEATURES)}
                    />
                </motion.div>
            </Box>

            <Box
                position="absolute"
                bottom={40}
                left="50%"
                sx={{ transform: 'translateX(-50%)', zIndex: 2 }}
                display="flex"
                alignItems="center"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                >
                    <Box display={'flex'} gap={2} alignItems="center">
                        <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />

                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                            Scroll Down
                        </Typography>
                        <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
};

const WrappedHero = SectionWrapper({
    Component: HeroSection,
    idName: 'hero',
});

export default WrappedHero;
