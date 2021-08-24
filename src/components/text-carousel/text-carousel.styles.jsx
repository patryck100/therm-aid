import styled from "styled-components";

export const TextCarouselContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  text-align: justify;
`;

export const TextCarouselP = styled.p`
  font-size: 20px;
  line-height: 28px;
  z-index: 9;
  width: 50%;
  height: auto;

  color: #ffffff;

  @media screen and (max-width: 760px) {
    width: 80%;
    font-size: 1.5rem;
    line-height: 140%;
  }
`;

export const SpanContainer = styled.div`
  display: flex;
`;

export const SpanText = styled.span`
  //the span will act as a container
  //creates a square of 20 per 20px
  height: 20px;
  width: 20px;
  margin: 0 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9; //place it over all the other elements otherwise it would not be possible to click on it

  ::before {
    //creates the 3 dots options for the Text Carousel
    content: "";
    height: 6px;
    width: 6px;
    //validates if actived text is the same as the one being displayed. If it is true, display color, otherwise set it to transparent
    background-color: ${({ active, data }) =>
    //eslint-disable-next-line
      active == data ? "#F6921E" : "transparent"};
    border-radius: 50%;
    border: 1px solid;
    border-color: #f6921e;
    transition: background-color 0.3s ease;
  }

  :hover::before {
    //changes the color of the 3 dots when hover it
    background-color: #f6921e;
  }
`;
