import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const TOKEN_KEY = 'music_token';

export function setToken(token: string): void {
    setCookie(TOKEN_KEY, token);
}

export function getToken(): string | undefined {
    return getCookie(TOKEN_KEY);
}

export function deleteToken(): void {
    deleteCookie(TOKEN_KEY);
}
