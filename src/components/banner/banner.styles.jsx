import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo/ThermAid-logo-body.svg";
import BannerImg from "../../assets/bg-banner.png";
import VisualKey from "../../assets/key-visual.png";

export const BannerContainer = styled.div`
  position: relative;
  height: 100vw;
  width: 100%;
  left: 0px;
  top: 0px;
  background: url(${BannerImg});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    position: relative;
    width: 100%;
    height: 900px;

  }
`;

export const BannerInfo = styled.div`
  display: flex;
`;

export const VisualImg = styled.div`
  position: absolute;
  left: 20%;
  top: 0;
  opacity: 65%;
  width: 100%;
  height: 100%;
  background: url(${VisualKey});
  background-size: cover;

  @media screen and (min-width: 1440px) {
    //disapears if screen is smaller than 700px
    position: absolute;
    width: 50%;
    height: 100%;
    left: 55%;
    top: 0;
    opacity: 100%;
  }
`;

export const TitleLogo = styled(Logo)`
  position: absolute;
  left: 9.03%;
  right: 63.19%;
  top: 13.43%;
  bottom: 83.6%;
  z-index: 9;

  @media screen and (max-width: 700px) {
    //disapears if screen is smaller than 700px
    display: none;
  }
`;

export const Title = styled.p`
  position: absolute;
  width: 50%;
  height: auto;
  left: 9.03%;
  right: 63.19%;
  top: 16.43%;
  bottom: 83.6%;
  text-align: start;
  font-family: Gotham;
  font-style: normal;
  font-weight: 300;
  font-size: 55px;
  line-height: 125%;
  z-index: 9;

  color: #ffffff;

  @media screen and (max-width: 700px) {
    //disapears if screen is smaller than 700px
    display: block;
    width: 80%;
    text-align: start;
    font-family: Gotham;
    font-style: normal;
    font-weight: 300;
    font-size: 2rem;
    line-height: 100%;
  }
`;
