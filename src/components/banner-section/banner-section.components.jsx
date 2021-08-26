import React from "react";
import { TextCarousel } from "../text-carousel/text-carousel.componenst";

import {
  BannerContainer,
  BannerInfo,
  BannerContent,
  TitleLogo,
  Title,
  VisualImg,
} from "./banner-section.styles";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerInfo>
        <BannerContent>
          <TitleLogo />
          <Title>Heat wraps for effective pain relief</Title>
          <TextCarousel />
        </BannerContent>
        <VisualImg />
      </BannerInfo>
    </BannerContainer>
  );
};

export default Banner;
