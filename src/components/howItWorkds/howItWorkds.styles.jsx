import styled, { css } from "styled-components";
import HeatWaveImg from "../../assets/HEAT-WAVE.png";
import { ReactComponent as RedButton } from "../../assets/red-button.svg";


export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  background: #e5e5e5;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const Title = styled.p`
  width: 100%;
  height: auto;
  margin-top: 8%;
  text-align: center;
  font-family: Gotham;
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 38px;
  z-index: 9;

  color: #cc112c;
`;

export const ImgContainer = styled.div`
  width: 100%;
  padding-top: 10%;
  height: auto;
  z-index: 9;
  text-align: center;

  img {
    width: 668px;
    height: 100%;
    min-width: 332px;
    z-index: 1;

    @media screen and (max-width: 760px) {
      max-width: 65%;
      min-width: 55%;
    }
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${HeatWaveImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const GetRedButtonItem = css`
  position: absolute;
  width: 64px;

  :hover{
    position: absolute;
    transform: scale(1.3);
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    cursor: pointer;
  }
`;

export const RedButtonContainer = styled.div`
  position: absolute;
  z-index: 8;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const RedButtonItem = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 250px;
`;

export const RedButtonTop = styled(RedButton)`
  ${GetRedButtonItem}
  top: 35px;
  right: -25px;
`;

export const RedButtonLeft = styled(RedButton)`
  ${GetRedButtonItem}
  right: 50px;
`;

export const RedButtonRight = styled(RedButton)`
  ${GetRedButtonItem}
  left: 120px;
`;

export const RedButtonMiddle = styled(RedButton)`
  ${GetRedButtonItem}
  top: 400px;
`;

export const RedButtonBottom = styled(RedButton)`
  ${GetRedButtonItem}
  top: 550px;
`;
