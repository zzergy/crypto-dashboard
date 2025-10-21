import { Button, keyframes } from '@mui/material';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
  }
  70% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

interface GradientButtonProps {
    onClick: () => void;
}

const GradientButton = ({ onClick }: GradientButtonProps) => {
    return (
        <Button
            onClick={onClick}
            variant="contained"
            sx={{
                background: 'palette.primary',
                color: '#fff',
                fontWeight: 'bold',
                px: 4,
                py: 1.5,
                borderRadius: 3,
                textTransform: 'none',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                backgroundSize: '200% 200%',
                transition: 'all 0.5s ease',
                animation: `${pulse} 2s infinite`,
                '&:hover': {
                    backgroundPosition: 'right center',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
                },
            }}
        >
            Start your journey here
        </Button>
    );
};

export default GradientButton;
