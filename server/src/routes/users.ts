import express from 'express';
import { query } from '../db';
import bcrypt from 'bcrypt';

export const userRouter = express.Router();

interface RegisterUserPayload {
    username: string;
    email: string;
    password: string;
}

userRouter.post('/register', async (req, res) => {
    const { username, email, password } = req.body as RegisterUserPayload;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[A-Za-z0-9]+$/;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password.length < 6) {
        return res
            .status(400)
            .json({ message: 'Password must be at least 6 characters long' });
    }

    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    if (username.length < 5) {
        return res
            .status(400)
            .json({ message: 'Username must be at least 5 characters long' });
    }

    if (!usernameRegex.test(username)) {
        return res
            .status(400)
            .json({ message: 'Username can only contain letters and numbers' });
    }

    try {
        const checkIfUserExistsQuery = `
            SELECT * FROM users WHERE email = $1 OR username = $2
        `;

        const existingUsers = await query(checkIfUserExistsQuery, [
            email,
            username,
        ]);

        if (existingUsers.rows.length > 0) {
            return res
                .status(400)
                .json({ message: 'Username or email already in use' });
        }

        const addUserQuery = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3)
        `;

        const hashedPassword = await bcrypt.hash(password, 10);
        await query(addUserQuery, [username, email, hashedPassword]);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        const error: Error = err as Error;

        res.status(500).json({
            error: 'Internal Server Error',
            message: error.message,
        });
    }
});
