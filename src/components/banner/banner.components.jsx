import React from "react";
import { TextCarousel } from "../text-carousel/text-carousel.componenst";

import { BannerContainer, BannerInfo, TitleLogo, Title, VisualImg } from "./banner.styles";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerInfo>
        <TitleLogo />
        <Title>Heat wraps for effective pain relief</Title>
        <TextCarousel/>
        <VisualImg/>
      </BannerInfo>
    </BannerContainer>
  );
};

export default Banner;
