import { User } from '@/types/User';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { MenuButton, MenuLink, StyledButton, StyledMenu, UserImage, Username } from './UserProfilePopover.styles';
import { RiAlbumLine } from 'react-icons/ri';
import { MdLogout } from 'react-icons/md';
import { useAuth } from '@/hooks/useAuth';

type UserProfileButtonProps = {
    user: User;
};

const UserProfilePopover = ({ user }: UserProfileButtonProps) => {
    const { logout } = useAuth();

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
            <PopoverPanel anchor="bottom" as={StyledMenu}>
                <MenuLink href="/user/albums">
                    <RiAlbumLine size={20} />
                    Seus albums
                </MenuLink>
                <MenuButton onClick={logout}>
                    <MdLogout size={20} />
                    Sair
                </MenuButton>
            </PopoverPanel>
        </Popover>
    );
};

export default UserProfilePopover;
