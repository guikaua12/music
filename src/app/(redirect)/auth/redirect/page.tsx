'use client';

import { useEffect } from 'react';

export const AuthRedirect = () => {
    useEffect(() => {
        window.opener.location.reload();

        window.close();
    }, []);

    return <div>Loading...</div>;
};

export default AuthRedirect;
