import React from "react";

import {
  CardContainer,
  CardContent,
  CardHeader1,
  CardImgRight,
  CardP,
} from "./card.styles";

export const Card = (title, text, img, toggle) => {

  


  return (
    <CardContainer>
      <CardContent>
        <CardHeader1>Long lasting heat</CardHeader1>
        <CardP>
          ThermAid® is clinically proven to provide therapeutic muscle
          penetrating heat and up to 16 hours pain relief. That’s up to 8 hours
          while you wear the heat wrap plus an additional 8 hours of pain relief
          after you take it off.
          </CardP>
          <CardImgRight/>
      </CardContent>
    </CardContainer>
  );
};
