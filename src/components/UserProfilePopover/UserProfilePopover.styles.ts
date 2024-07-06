import Image from 'next/image';
import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: #262626;
    color: #fff;
    padding: 0.75rem 0.75rem;
    border-radius: 2.5rem;
    border: 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    outline: 0;

    &:hover {
        background-color: #333;
    }
`;

export const Username = styled.span``;

export const UserImage = styled(Image)`
    border-radius: 4rem;
    object-fit: cover;
`;

export const StyledPanel = styled.div`
    background-color: #1f1f1f;
    border-radius: 0.5rem;
    padding: 1rem;
`;
