import { User } from '@/types/User';
import { api } from './api';

export async function userInfo(): Promise<User> {
    return api.get('/user/me');
}
