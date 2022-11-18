import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../services/AuthService';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const nav = useNavigate();

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await login('a', 'b');
            nav('/dashboard');
        } catch (error) {
            console.error('error', error);
        }
    };

    useEffect(() => {
        document.title = 'Login';
    }, []);

    return (
        <div>
            <h1>Login yo!</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChangeUsername}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
