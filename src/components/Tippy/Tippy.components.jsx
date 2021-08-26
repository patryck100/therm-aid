import React from "react";

import { ReactComponent as HeatCell } from "../../assets/ThermAid-Options-SVG/Heat-Cell.svg";
import { ReactComponent as IncreaseBloodCirculation } from "../../assets/ThermAid-Options-SVG/Increase-Blood-Circulation.svg";
import { ReactComponent as LongLastingHeat } from "../../assets/ThermAid-Options-SVG/Long-Lasting-Heat.svg";
import { ReactComponent as MusclesRelaxing } from "../../assets/ThermAid-Options-SVG/Muscles-Relaxing.svg";
import { ReactComponent as PainRelief } from "../../assets/ThermAid-Options-SVG/Pain-Relief.svg";



import {
  RedButtonContainer,
  Top,
  Left,
  Right,
  Middle,
  Bottom,
  RedButtonItem,
  RedButtonIcon,
  TippyContainer
} from "./Tippy.styles";

export const ToolTip = () => {
  return (
    <RedButtonContainer>
      <Top>
        <TippyContainer
          content={<PainRelief style={{ width: "335px" }} />}
          arrow={false}
          placement="right"
          boundary="viewport"
        >
          <RedButtonIcon />
        </TippyContainer>
      </Top>

      <RedButtonItem>
        <Left>
          <TippyContainer
            content={<LongLastingHeat style={{ width: "335px" }} />}
            arrow={false}
            placement="left"
            boundary="viewport"
          >
            <RedButtonIcon />
          </TippyContainer>
        </Left>
        <Right>
          <TippyContainer
            content={<IncreaseBloodCirculation style={{ width: "335px" }} />}
            arrow={false}
            placement="right"
            boundary="viewport"
          >
            <RedButtonIcon />
          </TippyContainer>
        </Right>
      </RedButtonItem>

      <Middle>
        <TippyContainer
          content={<HeatCell style={{ width: "335px" }} />}
          arrow={false}
          placement="left"
          boundary="viewport"
        >
          <RedButtonIcon />
        </TippyContainer>
      </Middle>
      <Bottom>
        <TippyContainer
          content={<MusclesRelaxing style={{ width: "335px" }} />}
          arrow={false}
          placement="right"
          boundary="viewport"
        >
          <RedButtonIcon />
        </TippyContainer>
      </Bottom>
    </RedButtonContainer>
  );
};
