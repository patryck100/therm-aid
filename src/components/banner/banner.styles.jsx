import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo/ThermAid-logo-body.svg";
import BannerImg from "../../assets/bg-banner.png";
import VisualKey from "../../assets/key-visual.png";

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 900px;
  background: url(${BannerImg});
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const BannerInfo = styled.div`
  //allows content information to be placed one under another
  display: flex;
  flex-direction: column;
`;

export const BannerContent = styled.div`
  //this is where the text content will be placed
  position: absolute;
  left: 9.03%;
  top: 13.43%;
  bottom: 83.6%;
`;

export const VisualImg = styled.div`
  //place image according to cordinates independent of the content on the page
  position: absolute;
  width: 50%;
  height: 100%;
  left: 55%;
  top: 0;
  opacity: 100%;
  background: url(${VisualKey});
  background-size: cover;

  @media screen and (max-width: 760px) {
    //center image at the middle and reduces opacity to better visibility of the text
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 45%;
  }
`;

export const TitleLogo = styled(Logo)`
  position: relative;
  z-index: 9;

  @media screen and (max-width: 760px) {
    //Logo desapears on screens smaller than 760px
    display: none;
  }
`;

export const Title = styled.p`
  position: relative;
  width: 50%;
  height: auto;
  text-align: start;
  font-size: 55px;
  z-index: 9;

  color: #ffffff;

  @media screen and (max-width: 760px) {
    //addapt text for a smaller screen
    width: 80%;
    text-align: start;
    font-size: 48px;
  }
`;
