import { userInfo } from '@/services/UserService';
import { User } from '@/types/User';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

const USER_QUERY_KEY = ['user'];

export function useAuth() {
    const userQuery = useQuery<User | null, AxiosError>({
        queryKey: USER_QUERY_KEY,
        refetchOnWindowFocus: false,
        retry: false,
        queryFn: userInfo,
    });

    return { userQuery };
}
