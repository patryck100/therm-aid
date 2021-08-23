import React from "react";

import {
  FooterContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  LogoBody
} from "./footer.styles";

const Footer = () => (
  //creating a div to contain the logo, and another sub div options with shop and contact
  <FooterContainer>
    <LogoContainer to="/">
      <p>Copyright © 2021 Angel Pharma</p>
      <LogoBody/>
    </LogoContainer>

    <OptionsContainer>
      <OptionLink to="/terms&conditions">Terms & Conditions</OptionLink>
      <OptionLink to="/privacy-policy">Privacy Policy</OptionLink>
      <OptionLink to="/cookie-policy">Cookie Policy </OptionLink>
    </OptionsContainer>
  </FooterContainer>
);

export default Footer;
