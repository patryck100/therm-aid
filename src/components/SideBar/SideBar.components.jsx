import React from "react";

import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarLink,
  SideBarWrapper,
  SideBarMenu,
  SideBarLogo,
  NavBar,
} from "./SideBar.styles";
import { LogoContainer } from "../nav-bar/nav-bar.styles";

const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <NavBar>
        <LogoContainer>
          <a href="/">
            <SideBarLogo />
          </a>
        </LogoContainer>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
      </NavBar>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="/Home" onClick={toggle}> Home</SideBarLink>
          <SideBarLink to="/Products" onClick={toggle}> Products</SideBarLink>
          <SideBarLink to="/heat-therapy" onClick={toggle}> Heat Thearpy</SideBarLink>
          <SideBarLink to="/FAQ" onClick={toggle}> FAQ</SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
