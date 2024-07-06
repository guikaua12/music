'use client';
import styled from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Spinner = styled(AiOutlineLoading3Quarters)`
    animation: rotate 1s linear infinite;

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
