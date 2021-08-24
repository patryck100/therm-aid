import React, { useState } from "react";
import {
  TextCarouselP,
  TextCarouselContainer,
  SpanContainer,
  SpanText,
} from "./text-carousel.styles";

export const TextCarousel = () => {
  const Quotes = {
    0: {
      quote:
        "ThermAid® heat wraps for more targeted pain relief. Clinical trials show that ThermAid® heat wraps are more effective than the maximum daily dosage of either Paracetamol or Ibuprofen for long lasting pain relief.",
    },
    1: {
      quote:
        "ThermAid® heat wraps provides therapeutic muscle penetrating heat and long lasting pain relief for up to 16 hours. That’s up to 8 hours while you wear the heat wrap plus an additional 8 hours of pain relief after you remove it. ",
    },
    2: {
      quote:
        "ThermAid® heat wraps uses Patented Heat Cell Technology for deep penetrating heat.",
    },
  };

  const [currentQuote, setCurrentQuote] = useState(Quotes[0]);

  const [active, setActive] = useState(0);

  //console.log(active);
  const handleSetClick = (event) => {
    setCurrentQuote(Quotes[event.target.getAttribute("data")]);
    setActive(event.target.getAttribute("data"));
  };

  return (
    <TextCarouselContainer>
      <TextCarouselP> {currentQuote.quote}</TextCarouselP>
      <SpanContainer>
        {Object.keys(Quotes).map((index) => (
          <SpanText
            onClick={(event) => handleSetClick(event)}
            data={index}
            active={active}
            key={index}
          />
        ))}
      </SpanContainer>
    </TextCarouselContainer>
  );
};
