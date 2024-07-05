import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Container, RightSide } from './layout.styles';
import Sidebar from '@/components/Sidebar/Sidebar';
import ThemeProvider from '@/providers/ThemeProvider';
import Header from '@/components/Header/Header';
import QueryProvider from '@/providers/QueryProvider';

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
    title: 'Music',
    description: 'Music website',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body className={poppins.className}>
                <ThemeProvider>
                    <QueryProvider>
                        <Container>
                            <Sidebar />
                            <RightSide>
                                <Header />
                                <main>{children}</main>
                            </RightSide>
                        </Container>
                    </QueryProvider>aa
                </ThemeProvider>
            </body>
        </html>
    );
}
