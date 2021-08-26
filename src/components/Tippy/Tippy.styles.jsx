import styled from "styled-components";
import { ReactComponent as RedButton } from "../../assets/red-button.svg";

export const RedButtonIcon = styled(RedButton)`
  position: absolute;
  width: 64px;

  :hover{
    transform: scale(1.3);
    transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    cursor: pointer;
  }
`;

export const RedButtonContainer = styled.div`
  position: absolute;
  z-index: 8;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const RedButtonItem = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 250px;
`;

// Setting position for RedButton Icon on section "How it Workds"

export const Top = styled.div`
  position: absolute;
  top: 35px;
  left: -25px;
`;

export const Left = styled.div`
  right: 140px;
  position: absolute;
`;

export const Right = styled.div`
  left: 120px;
  position: absolute;
`;

export const Middle = styled.div`
  top: 400px;
  position: absolute;
`;

export const Bottom = styled.div`
  top: 550px;
  position: absolute;
`;