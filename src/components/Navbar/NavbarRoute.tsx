'use client';
import React, { ReactNode } from 'react';
import { NavRoute } from '@/components/Navbar/NavbarRoute.styles';

type Props = {
    children: ReactNode;
    href: string;
};

const NavbarRoute = ({ children, href }: Props) => {
    return <NavRoute href={href}>{children}</NavRoute>;
};

export default NavbarRoute;
