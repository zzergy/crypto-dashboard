import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils';

interface SectionWrapperProps {
    Component: React.ComponentType;
    idName: string;
}

const SectionWrapper = ({ Component, idName }: SectionWrapperProps) =>
    function EnhancedComponent() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <Box
                    component="span"
                    id={idName}
                    sx={{ display: 'block', position: 'relative', zIndex: 0 }}
                />
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 0,
                    }}
                >
                    <Component />
                </Box>
            </motion.section>
        );
    };

export default SectionWrapper;
