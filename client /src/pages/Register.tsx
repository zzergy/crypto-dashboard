import { Box, Typography, Link, TextField, Button } from '@mui/material';
import video from '../assets/crypto.mp4';
import { Link as RouterLink } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface RegisterFormInputs {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const { control, handleSubmit } = useForm<RegisterFormInputs>();
    const onSubmit = (data: RegisterFormInputs) => console.log(data);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                justifyContent: 'space-around',
                alignItems: 'center',
                height: '100vh',
                width: '100%',
                backgroundColor: 'background.default',
                p: { xs: 2, md: 3 },
            }}
        >
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    height: { xs: '40%', md: '100%' },
                    minHeight: { xs: 300, md: 'auto' },
                    position: 'relative',
                    borderRadius: { xs: 2, md: '16px' },
                    overflow: 'hidden',
                }}
            >
                <Box
                    component="video"
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,0,0,0.40)',
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        top: { xs: 10, md: 20 },
                        left: { xs: 10, md: 26 },
                        display: 'flex',
                        gap: 2,
                        alignItems: 'center',
                    }}
                >
                    <Box
                        component="img"
                        src="/logo.svg"
                        width={40}
                        height={40}
                    />
                    <Typography
                        variant="h6"
                        sx={{ color: 'white', fontWeight: 'bold' }}
                    >
                        Nexus
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        top: { xs: 10, md: 20 },
                        right: { xs: 10, md: 26 },
                    }}
                >
                    <Button
                        component={RouterLink}
                        endIcon={<ChevronRightIcon fontSize="small" />}
                        to="/"
                        sx={{
                            borderRadius: 8,
                            textTransform: 'none',
                            pl: 2,
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            backgroundColor: 'rgba(134, 121, 163, 0.2)',
                            '& .MuiButton-endIcon': { m: 0, p: 0 },
                            '&:hover': {
                                backgroundColor: 'rgba(134, 121, 163, 0.3)',
                            },
                        }}
                    >
                        Back to Home
                    </Button>
                </Box>

                <Typography
                    variant="h6"
                    sx={{
                        position: 'absolute',
                        bottom: { xs: 20, md: 40 },
                        left: '50%',
                        transform: 'translateX(-50%)',
                        textAlign: 'center',
                        color: 'white',
                        fontWeight: 400,
                        maxWidth: '80%',
                        fontSize: { xs: '0.95rem', md: '1.3rem' },
                    }}
                >
                    Track. Analyze. Conquer. <br />
                    Your Crypto Journey Starts Here.
                </Typography>
            </Box>

            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    px: { xs: 2, md: 14 },
                }}
            >
                <Box>
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 'bold',
                            mb: 2,
                            fontSize: { xs: '1.8rem', md: '2.2rem' },
                        }}
                    >
                        Create an Account
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3, maxWidth: 400 }}>
                        Already have an account?{' '}
                        <Link
                            component={RouterLink}
                            to="/login"
                            sx={{
                                textDecoration: 'none',
                                color: 'primary.main',
                            }}
                        >
                            Login
                        </Link>
                    </Typography>
                </Box>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="username"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                label="Username"
                                fullWidth
                                margin="normal"
                                error={!!fieldState.error}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="email"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                type="email"
                                label="Email"
                                fullWidth
                                margin="normal"
                                error={!!fieldState.error}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="password"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                type="password"
                                label="Password"
                                fullWidth
                                margin="normal"
                                error={!!fieldState.error}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field, fieldState }) => (
                            <TextField
                                type="password"
                                label="Confirm Password"
                                fullWidth
                                margin="normal"
                                error={!!fieldState.error}
                                {...field}
                            />
                        )}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 4,
                            borderRadius: 2,
                            px: 4,
                            py: 1.5,
                            fontSize: '1rem',
                            textTransform: 'none',
                        }}
                    >
                        Create Account
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default Register;
