import styled from "styled-components";
import HeatWaveImg from "../../assets/HEAT-WAVE.png";
import { ToolTip } from "../Tippy/Tippy.components";


export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
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

export const ToolTipContainer = styled(ToolTip)`

  @media screen and (max-width: 760px) {
    display: none;
  }
`;


