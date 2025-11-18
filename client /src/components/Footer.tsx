import { Box, Typography, Link, Stack } from '@mui/material';
import { GitHub, Language, LinkedIn } from '@mui/icons-material';
import { palette } from '../styles/theme/palette';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 8,
                textAlign: 'center',
            }}
        >
            <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                alignItems="center"
                mb={2}
            >
                <Link
                    href="https://github.com/zzergy"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: palette.primary,
                        '&:hover': {
                            opacity: 0.8,
                        },
                    }}
                >
                    <GitHub />
                    <Typography>GitHub</Typography>
                </Link>

                <Link
                    href="https://zzergy.github.io/portfolio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: palette.primary,
                        '&:hover': {
                            opacity: 0.8,
                        },
                    }}
                >
                    <Language />
                    <Typography>Portfolio</Typography>
                </Link>

                <Link
                    href="https://www.linkedin.com/in/bogdana-yaneva/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        color: palette.primary,
                        '& svg': { color: palette.primary },
                        '&:hover': { opacity: 0.8 },
                    }}
                >
                    <LinkedIn />
                    <Typography>LinkedIn</Typography>
                </Link>
            </Stack>

            <Typography variant="body2" color="text.secondary">
                MIT License © {new Date().getFullYear()} Bogdana Yaneva
            </Typography>
        </Box>
    );
};

export default Footer;
