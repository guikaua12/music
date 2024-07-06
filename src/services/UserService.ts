import { User } from '@/types/User';
import { api } from './api';

export async function userInfo(): Promise<User> {
    const response = await api.get('/user/me');
    return response.data;
}
