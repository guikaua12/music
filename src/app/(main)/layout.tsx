import Header from '@/components/Header/Header';
import Sidebar from '@/components/Sidebar/Sidebar';
import { Container, RightSide } from './layout.styles';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Container>
            <Sidebar />
            <RightSide>
                <Header />
                <main>{children}</main>
            </RightSide>
        </Container>
    );
}
