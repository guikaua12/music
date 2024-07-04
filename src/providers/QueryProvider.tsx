import React, { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [queryClient] = useState(new QueryClient());

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default AuthProvider;
