import styled from "styled-components";

export const TextCarouselContainer = styled.div`
  display: flex;
  position: absolute;
  left: 9.03%;
  top: 380px;
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

  @media screen and (max-width: 700px) {
    //disapears if screen is smaller than 700px
    text-align: start;
    font-size: 1.5rem;
    line-height: 140%;
    top: 30%;
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

  ::before { //creates the 3 dots options for the Text Carousel
    content: "";
    height: 6px;
    width: 6px;
    //validates if actived text is the same as the one being displayed. If it is true, display color, otherwise set it to transparent
    background-color: ${({active,data}) => active==data ? "#F6921E" : "transparent"};
    border-radius: 50%;
    border: 1px solid;
    border-color: #F6921E;
    transition: background-color 0.3s ease;
  }

    :hover::before{ //changes the color of the 3 dots when hover it
        background-color: #F6921E;
    }


`;
