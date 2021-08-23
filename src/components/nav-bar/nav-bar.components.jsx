import React from "react";
import {
  NavBarContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  Option,
  LogoImg,
  Nav,
  MobileIcon,
  MenuIcon,
} from "./nav-bar.styles";

//pass in toggle as a prop from the app.js
const NavBar = ({toggle}) => (
  //creating a div to contain the logo, and another sub div options with shop and contact
  <Nav>
    <NavBarContainer>
      <LogoContainer>
        <a href="/">
          <LogoImg />
        </a>
      </LogoContainer>
      <MobileIcon onClick={toggle} >
        <MenuIcon  />
      </MobileIcon>
      <OptionsContainer>
        <Option>
          <OptionLink to="/Home">Home</OptionLink>
        </Option>
        <Option>
          <OptionLink to="/Products">Products</OptionLink>
        </Option>
        <Option>
          <OptionLink to="/heat-therapy">Heat Therapy </OptionLink>
        </Option>
        <Option>
          <OptionLink to="/FAQ">FAQ</OptionLink>
        </Option>
      </OptionsContainer>
    </NavBarContainer>
  </Nav>
);

export default NavBar;
