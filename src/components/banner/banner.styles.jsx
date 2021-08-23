import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo/ThermAid-logo-body.svg";
import BannerImg from "../../assets/bg-banner.png";

export const BannerContainer = styled.div`
  position: relative;

  height: 100vw;
  width: 100%;
  background: url(${BannerImg});
  background-size: cover;
  background-position: center;
`;

export const BannerInfo = styled.div``;

export const TitleLogo = styled(Logo)`
  position: absolute;
  left: 9.03%;
  right: 63.19%;
  top: 13.43%;
  bottom: 83.6%;
`;

export const Title = styled.p`
  position: absolute;
  width: 700px;
  height: 160px;
  left: 130px;
  top: 373px;
  font-family: Gotham;
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  line-height: 80px;
  /* or 125% */

  color: #ffffff;
`;
