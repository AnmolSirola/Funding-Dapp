import React from 'react';
import {Btn, HeaderContainer, Logo, Navbar, NavItem, NavMenu} from "./HeaderElements";
import Link from "next/link"

const Header = () => {
    return (
        <HeaderContainer>
            <Link href={"/"}>
                <Logo> Sponsors </Logo>
            </Link>

            <Navbar>
                <NavMenu>
                    <NavItem> Sponsors </NavItem>
                    <Link href={"/Wallet"}>
                        <NavItem> Wallet </NavItem>
                    </Link>

                </NavMenu>
            </Navbar>
            {/*<Btn>Connect Wallet</Btn>*/}
            <Link href={"/Dashboard"}>
                <Btn>Dashboard</Btn>
            </Link>
        </HeaderContainer>
    );
};

export default Header;