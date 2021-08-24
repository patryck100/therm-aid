import React from "react";

import {
  MenuBarContainer,
  CloseIconContainer,
  CloseIcon,
  MenuBarLink,
  MenuBarWrapper,
  MenuBarOptions,
  MenuBarLogo,
  NavBar,
} from "./MenuBar.styles";

//reausing the Logo container from the NavBar component
import { LogoContainer } from "../nav-bar/nav-bar.styles"; 

const SideBar = ({isOpen, toggle}) => {
  return (
    <MenuBarContainer isOpen={isOpen} onClick={toggle}>
      <NavBar>
        <LogoContainer>
          <a href="/">
            <MenuBarLogo />
          </a>
        </LogoContainer>
        <CloseIconContainer >
          <CloseIcon onClick={toggle} />
        </CloseIconContainer>
      </NavBar>
      <MenuBarWrapper>
        <MenuBarOptions>
          <MenuBarLink to="/Home" onClick={toggle}> Home</MenuBarLink>
          <MenuBarLink to="/Products" onClick={toggle}> Products</MenuBarLink>
          <MenuBarLink to="/heat-therapy" onClick={toggle}> Heat Thearpy</MenuBarLink>
          <MenuBarLink to="/FAQ" onClick={toggle}> FAQ</MenuBarLink>
        </MenuBarOptions>
      </MenuBarWrapper>
    </MenuBarContainer>
  );
};

export default SideBar;
