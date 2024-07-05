import { env } from '@/env/env';
import axios from 'axios';
import { getCookie } from 'cookies-next';

const TOKEN_KEY = 'music_token';

export const api = axios.create({
    baseURL: env.API_ENDPOINT,
});

api.defaults.headers.common = {
    'Content-Type': 'application/json',
};

api.interceptors.request.use((config) => {
    const token = getCookie(TOKEN_KEY);
    console.log('token: ', token);

    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
});
