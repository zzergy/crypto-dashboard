import * as yup from 'yup';

export const registerValidationSchema = yup.object({
    username: yup
        .string()
        .required('Username is required')
        .matches(
            /^[A-Za-z0-9]+$/,
            'Username can only contain letters and numbers'
        )
        .min(5, 'Username must be at least 5 characters'),
    email: yup
        .string()
        .required('Email is required')
        .email('Invalid email format'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),
    confirmPassword: yup
        .string()
        .required('Confirm Password is required')
        .oneOf([yup.ref('password')], 'Passwords must match'),
});
