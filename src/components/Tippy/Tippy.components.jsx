import React from "react";

import { ReactComponent as HeatCell } from "../../assets/ThermAid-Options-SVG/Heat-Cell.svg";
import { ReactComponent as IncreaseBloodCirculation } from "../../assets/ThermAid-Options-SVG/Increase-Blood-Circulation.svg";
import { ReactComponent as LongLastingHeat } from "../../assets/ThermAid-Options-SVG/Long-Lasting-Heat.svg";
import { ReactComponent as MusclesRelaxing } from "../../assets/ThermAid-Options-SVG/Muscles-Relaxing.svg";
import { ReactComponent as PainRelief } from "../../assets/ThermAid-Options-SVG/Pain-Relief.svg";

//ToolTip component from "https://github.com/atomiks/tippyjs"
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

import {
  RedButtonContainer,
  Top,
  Left,
  Right,
  Middle,
  Bottom,
  RedButtonItem,
  RedButtonIcon,
} from "./Tippy.styles";

export const ToolTip = () => {
  return (
    <RedButtonContainer>
      <Top>
        <Tippy
          content={<PainRelief style={{ width: "335px" }} />}
          maxWidth="0px"
          arrow={false}
          boundary="viewport"
        >
          <RedButtonIcon />
        </Tippy>
      </Top>

      <RedButtonItem>
        <Left>
          <Tippy
            content={<LongLastingHeat style={{ width: "335px" }} />}
            maxWidth="0px"
            arrow={false}
            placement="left"
            boundary="viewport"
          >
            <RedButtonIcon />
          </Tippy>
        </Left>
        <Right>
          <Tippy
            content={<IncreaseBloodCirculation style={{ width: "335px" }} />}
            maxWidth="0px"
            arrow={false}
            placement="top-start"
            boundary="viewport"
          >
            <RedButtonIcon />
          </Tippy>
        </Right>
      </RedButtonItem>

      <Middle>
        <Tippy
          content={<HeatCell style={{ width: "335px" }} />}
          maxWidth="0px"
          arrow={false}
          boundary="viewport"
        >
          <RedButtonIcon />
        </Tippy>
      </Middle>
      <Bottom>
        <Tippy
          content={<MusclesRelaxing style={{ width: "335px" }} />}
          maxWidth="0px"
          arrow={false}
          boundary="viewport"
        >
          <RedButtonIcon />
        </Tippy>
      </Bottom>
    </RedButtonContainer>
  );
};
