import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";
import NavItems from "./navItems";

const NavbarContainer = styled.div`
  ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-row
        items-center
        lg:px-12
        justify-between
    `};

  min-height: 68px;
`;

const LogoContainer = styled.div``;

function NavBar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}

export default NavBar;
