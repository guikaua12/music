import { env } from '@/env/env';
import axios, { isAxiosError } from 'axios';
import { deleteToken, getToken } from './token-service';

export const api = axios.create({
    baseURL: env.API_ENDPOINT,
});

api.defaults.headers.common = {
    'Content-Type': 'application/json',
};

api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
        config.headers.authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (config) => config,
    (error) => {
        if (isAxiosError(error.response.status) && error.response.status === 401) {
            deleteToken();
            window.location.reload();
        }

        return Promise.reject(error);
    }
);
