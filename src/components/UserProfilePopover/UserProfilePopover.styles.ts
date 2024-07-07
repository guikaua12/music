import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: #262626;
    color: #fff;
    padding: 0.7rem 0.75rem;
    border-radius: 40px;
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

export const StyledMenu = styled.div`
    background-color: #1f1f1f;
    border-radius: 0.5rem;
    padding: 0.25rem 0;
    transition: none;
    display: flex;
    flex-direction: column;
    width: 11rem;
    margin-top: 0.25rem;
`;

const menuItemStyle = `
  background-color: #262626;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  outline: 0;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 300;

  &:hover {
    background-color: #333;
  }
`;

export const MenuButton = styled.button`
    ${menuItemStyle}
`;

export const MenuLink = styled(Link)`
    ${menuItemStyle}
`;
