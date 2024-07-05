'use client';

import React from 'react';
import { Container, HeaderWrapper } from '@/components/Header/Header.styles';
import Button from '@/components/Button/Button';
import { PiCloudArrowUpBold } from 'react-icons/pi';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useAuth } from '@/hooks/useAuth';
import GoogleLoginButton from '../LoginButton/GoogleLoginButton';

const Header = () => {
    const { userQuery } = useAuth();

    return (
        <HeaderWrapper>
            <Container>
                <SearchBar>Procure por uma música</SearchBar>
                {userQuery.data ? (
                    <div>
                        <Button>
                            <PiCloudArrowUpBold size={20} color="white" />
                        </Button>
                        <div>{userQuery.data.name}</div>
                    </div>
                ) : (
                    <GoogleLoginButton />
                )}
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
