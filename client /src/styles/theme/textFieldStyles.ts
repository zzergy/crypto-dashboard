import { Components, Theme } from '@mui/material';

export const textFieldStyles: Components<Omit<Theme, 'components'>> = {
    MuiTextField: {
        defaultProps: {
            variant: 'outlined',
            fullWidth: true,
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                borderRadius: 8,
                backgroundColor: '#21162e',
                color: '#FFFFFF',
                transition: 'all 0.3s ease',

                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#9C84D4',
                },

                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#9C84D4',
                },
            },
            input: {
                padding: '14px 16px',
                color: '#FFFFFF',

                '::placeholder': {
                    color: 'white',
                    opacity: 0.7,
                },
            },
            notchedOutline: {
                borderColor: '#3a2d52',
            },
        },
    },
    MuiInputLabel: {
        styleOverrides: {
            root: {
                color: '#8679a3',
                transition: 'all 0.3s ease',

                '&.Mui-focused': {
                    color: '#9C84D4',
                    fontSize: '1rem',
                },
            },
        },
    },
    MuiFormHelperText: {
        styleOverrides: {
            root: {
                color: '#8679a3',
            },
        },
    },
};
