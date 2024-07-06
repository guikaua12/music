'use client';

import React from 'react';
import { Container, HeaderWrapper, LoggedContainer } from '@/components/Header/Header.styles';
import Button from '@/components/Button/Button';
import { PiCloudArrowUpBold } from 'react-icons/pi';
import SearchBar from '@/components/SearchBar/SearchBar';
import { useAuth } from '@/hooks/useAuth';
import GoogleLoginButton from '../LoginButton/GoogleLoginButton';
import UserProfilePopover from '../UserProfilePopover/UserProfilePopover';

const Header = () => {
    const { userQuery } = useAuth();

    return (
        <HeaderWrapper>
            <Container>
                <SearchBar>Procure por uma música</SearchBar>
                {userQuery.data ? (
                    <LoggedContainer>
                        <Button>
                            <PiCloudArrowUpBold size={20} color="white" />
                        </Button>
                        <UserProfilePopover user={userQuery.data} />
                    </LoggedContainer>
                ) : (
                    <GoogleLoginButton />
                )}
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
