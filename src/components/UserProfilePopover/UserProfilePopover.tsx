import React from 'react';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { User } from '@/types/User';
import { StyledButton, StyledPanel, UserImage, Username } from './UserProfilePopover.styles';
import Image from 'next/image';
import Link from 'next/link';

type UserProfileButtonProps = {
    user: User;
};

const UserProfilePopover = ({ user }: UserProfileButtonProps) => {
    // console.log(user);

    return (
        <Popover className="relative">
            <PopoverButton as={StyledButton}>
                <UserImage
                    src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                    alt="Profile image"
                    width={32}
                    height={32}
                />
                <Username>{user.name}</Username>
            </PopoverButton>
            <PopoverPanel anchor="bottom" as={StyledPanel}>
                <Link href="/user/albums"></Link>
            </PopoverPanel>
        </Popover>
    );
};

export default UserProfilePopover;
