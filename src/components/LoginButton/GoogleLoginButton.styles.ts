import styled from 'styled-components';
import Button from '../Button/Button';

export const StyledButton = styled(Button)`
    background-color: white;
    color: black;
    font-weight: 500;
    border-radius: 0.25rem;
    display: flex;
    gap: 1rem;
    font-size: 0.85rem;
    padding: 0.6rem 1rem;

    &:hover {
        background-color: #d9d9d9;
    }
`;
