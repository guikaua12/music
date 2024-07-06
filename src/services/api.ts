import { env } from '@/env/env';
import axios, { isAxiosError } from 'axios';
import { getCookie, deleteCookie } from 'cookies-next';

const TOKEN_KEY = 'music_token';

export const api = axios.create({
    baseURL: env.API_ENDPOINT,
});

api.defaults.headers.common = {
    'Content-Type': 'application/json',
};

api.interceptors.request.use((config) => {
    const token = getCookie(TOKEN_KEY);

    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (config) => config,
    (error) => {
        if (isAxiosError(error.response.status) && error.response.status === 401) {
            deleteCookie(TOKEN_KEY);
            window.location.reload();
        }

        return Promise.reject(error);
    }
);
