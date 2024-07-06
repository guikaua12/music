'use client';
import { Container, Spinner } from './FullscreenLoading.styles';

const FullscreenLoading = () => {
    return (
        <Container>
            <Spinner size={24} />
        </Container>
    );
};

export default FullscreenLoading;
