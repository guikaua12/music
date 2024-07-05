type Env = {
    API_ENDPOINT: string;
};

export const env: Env = {
    API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:8080',
};
