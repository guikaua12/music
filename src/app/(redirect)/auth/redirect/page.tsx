'use client';

import FullscreenLoading from '@/components/FullscreenLoading/FullscreenLoading';
import { useEffect } from 'react';

const AuthRedirect = () => {
    useEffect(() => {
        window.opener.location.reload();

        window.close();
    }, []);

    return <FullscreenLoading />;
};

export default AuthRedirect;
