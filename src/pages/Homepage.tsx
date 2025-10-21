import { Box } from '@mui/material';
import {
    AboutSection,
    FeaturesSection,
    HeroSection,
    StatsSection,
} from '../components';

const Homepage = () => {
    return (
        <Box
            sx={{
                background: `
          radial-gradient(circle at top left, rgba(145,94,255,0.06), transparent 60%),
          radial-gradient(circle at bottom right, rgba(94,255,145,0.08), transparent 60%)
        `,
            }}
        >
            <HeroSection />
            <FeaturesSection />
            <StatsSection />
            <AboutSection />
        </Box>
    );
};

export default Homepage;
