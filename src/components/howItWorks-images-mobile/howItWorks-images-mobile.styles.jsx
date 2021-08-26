import styled from "styled-components";

export const MobileImagesContainer = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
  }
`;
