import React from 'react'

import { MobileImagesContainer } from './howItWorks-images-mobile.styles'
import { ReactComponent as HeatCell } from "../../assets/ThermAid-Options-Mobile/Heat-Cell.svg";
import { ReactComponent as IncreaseBloodCirculation } from "../../assets/ThermAid-Options-Mobile/Increase-Blood-Circulation.svg";
import { ReactComponent as LongLastingHeat } from "../../assets/ThermAid-Options-Mobile/Long-Lasting-Heat.svg";
import { ReactComponent as MusclesRelaxing } from "../../assets/ThermAid-Options-Mobile/Muscles-Relaxing.svg";
import { ReactComponent as PainRelief } from "../../assets/ThermAid-Options-Mobile/Pain-Relief.svg";

export const MobileImages = () => {
    return (
        <MobileImagesContainer>
            <HeatCell/>
            <IncreaseBloodCirculation/>
            <LongLastingHeat/>
            <MusclesRelaxing/>
            <PainRelief/>
        </MobileImagesContainer>
    )
}
