import React from "react";

import {
  Container,
  ImgContainer,
  Title,
  ImgWrapper,
  ToolTipContainer,
} from "./howItWorks-section.styles";

import ShutterStockImg from "../../assets/shutterstock-women.png";
import { MobileImages } from "../howItWorks-images-mobile/howtItWorks-images-mobile.components";

export const HowItWorks = () => {
  return (
    <Container>
      <Title> How ThermAid® works? </Title>
      <ImgContainer>
        <ImgWrapper>
          <img src={ShutterStockImg} alt="item" />
          <ToolTipContainer />
        </ImgWrapper>
        <MobileImages />
      </ImgContainer>
    </Container>
  );
};
