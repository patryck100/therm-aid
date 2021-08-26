import styled, { css } from "styled-components";
import { ReactComponent as LongLastingHeat } from "../../assets/ThermAid-options-Icons/Long-Lasting-Heat.svg";
import { ReactComponent as PainRelieving } from "../../assets/ThermAid-options-Icons/Pain-Relief.svg";

export const CardContainer = styled.div`
  position: absolute;
  width: 416px;
  height: auto;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  box-shadow: 4px 4px 10px rgba(84, 15, 22, 0.2);
  border-radius: 2px;
  z-index: 99999;

  @media screen and (max-width: 760px) {
    width: 335px;
    height: auto;
  }
`;

export const CardContent = styled.div`
  width: 100%;
  height: auto;
  max-width: 286px;
  margin-top: 5px;

  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  margin-left: 30px;
  padding-right: 20px;
`;

export const CardHeader1 = styled.h1`
  font-size: 24px;
  color: #cc112c;
  margin-bottom: -5px;
`;

export const CardP = styled.p`
  font-size: 18px;
  color: #540f16;
`;

const CardImg = css`
  position: absolute;
  max-width: 196px;
  max-height: 196px;
`;

export const CardImgRight = styled(LongLastingHeat)`
  bottom: 80px;
  left: 300px;
  ${CardImg};
`;

export const CardImgLeft = styled(PainRelieving)`


`;
