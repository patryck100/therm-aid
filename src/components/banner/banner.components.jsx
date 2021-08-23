import React from "react";

import { BannerContainer, BannerInfo, TitleLogo, Title } from "./banner.styles";


const Banner = () => {

    return (
            <BannerContainer>
                <BannerInfo>
                    <TitleLogo/>
                    <Title>Heat wraps for effective pain relief</Title>
                </BannerInfo>
            </BannerContainer>

    );
}

export default Banner;