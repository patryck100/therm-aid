import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as closeIcon } from "../../assets/closeIcon.svg";
import { ReactComponent as Logo } from "../../assets/logo/ThermAid-logo-sideBar.svg";

export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999; //above anything
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  display: ${({isOpen}) => isOpen ? "grid" : "none"}; //avoids clickable bugs on the menu bar
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  //unhiddes the sideBar menu from top to bottom on click
  opacity: ${({ isOpen }) =>  isOpen ? "100%" : "0"}; //set visibility to true when clicked
  top: ${({ isOpen }) =>  isOpen ? "0" : "-100%"}; //makes the menu assessible
`;

export const NavBar = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  z-index: 1;
  padding: 0 25px;
  //any child inside this component is separeted with as much space as possible
  justify-content: space-between;
  background: #9d2c29;
`;

export const SideBarLogo = styled(Logo)`
  height: auto;
  width: 100px;
`;

export const CloseIcon = styled(closeIcon)`
  color: #ffffff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarWrapper = styled.div`
  background: #f2f2f2;
`;

export const SideBarMenu = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 55px);
  }
`;

export const SideBarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 62px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #540f16;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  transform: rotate(-0.09deg);

  &::hover {
    color: #9d2c29;
    transition: 0.2s ease-in-out;
  }
`;
