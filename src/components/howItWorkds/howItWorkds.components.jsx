import React from "react";

import {
  Container,
  ImgContainer,
  Title,
  ImgWrapper,
  RedButtonContainer,
  RedButtonTop,
  RedButtonLeft,
  RedButtonRight,
  RedButtonMiddle,
  RedButtonBottom,
  RedButtonItem,
} from "./howItWorkds.styles";

import ShutterStockImg from "../../assets/shutterstock-women.png";
//<img src={HeatWaveImg} alt="item" />
export const HowItWords = () => {
  return (
    <Container>
      <Title> How ThermAid® works? </Title>
      <ImgContainer>
        <ImgWrapper>
          <img className="shutterstock" src={ShutterStockImg} alt="item" />
          <RedButtonContainer>
            <RedButtonTop />

            <RedButtonItem>
              <RedButtonLeft />
              <RedButtonRight />
            </RedButtonItem>

            <RedButtonMiddle />
            <RedButtonBottom />
            
          </RedButtonContainer>
        </ImgWrapper>
      </ImgContainer>
    </Container>
  );
};
