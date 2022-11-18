import axios from 'axios';
import utils from '../utils';

const url = '/auth/login';

export const login = async (username, password) => {
    try {
        const response = await axios({
            method: 'post',
            url: url,
            data: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        const token = response.data.token;

        if (token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
    } catch (err) {
        utils.logger.error(err);
    }
};
export const logout = () => {};

export const isAuthenticated = () => {
    const user = localStorage.getItem('user');

    if (!user) {
        return {};
    }

    return JSON.parse(user);
};
