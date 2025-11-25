import { useMutation } from '@tanstack/react-query';
import { REGISTER_USER, RegisterUserPayload } from '../../types';

const registerUser = async (payload: RegisterUserPayload) => {
    const res = await fetch(REGISTER_USER, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to register user');
    }

    const data = await res.json();
    return data;
};

export const useRegisterUser = () => {
    return useMutation({
        mutationFn: registerUser,
    });
};
