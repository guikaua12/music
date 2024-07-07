import { deleteToken } from '@/services/token-service';
import { userInfo } from '@/services/UserService';
import { User } from '@/types/User';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { deleteCookie } from 'cookies-next';

const USER_QUERY_KEY = ['user'];

export function useAuth() {
    const queryClient = useQueryClient();

    const userQuery = useQuery<User | null, AxiosError>({
        queryKey: USER_QUERY_KEY,
        refetchOnWindowFocus: false,
        retry: false,
        queryFn: userInfo,
    });

    const logout = () => {
        deleteToken();
        queryClient.setQueryData(USER_QUERY_KEY, null);
    };

    return { userQuery, logout };
}
