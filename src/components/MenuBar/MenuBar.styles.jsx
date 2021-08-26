import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as closeIcon } from "../../assets/closeIcon.svg"; //import the X icon to close the menu bar
import { ReactComponent as Logo } from "../../assets/logo/ThermAid-logo-MenuBar.svg"; //import the Logo for menu bar

//Menu bar with options shows up when user click on the menu bar icon
export const MenuBarContainer = styled.aside`
  position: fixed;
  z-index: 999; //above anything
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  align-items: center;
  display: grid;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out; //brings the menu bar slowly from top to bottom
  //unhiddes the sideBar menu from top to bottom on click
  opacity: ${({ isOpen }) =>
    isOpen ? "100%" : "0"}; //set visibility to true when clicked
  top: ${({ isOpen }) => (isOpen ? "0" : "-150%")}; //makes the menu assessible
`;

export const NavBar = styled.div`
  //secondary nav bar with diferent colors and options when user click on the menu bar icon
  height: 70px;
  width: 100%;
  display: flex;
  z-index: 1;
  padding: 0 25px;
  //any child inside this component is separeted with as much space as possible
  justify-content: space-between;
  background: #9d2c29;
`;

/* ------------- Icons ---------- */
export const MenuBarLogo = styled(Logo)`
  height: auto;
  width: 100px;
`;
export const CloseIconContainer = styled.div`
  margin-right: 25px;
  justify-self: flex-end;
  display: flex;
  align-items: center;
`;
export const CloseIcon = styled(closeIcon)`
  color: #ffffff;
  cursor: pointer;
`;

/* --------- Menu bar Wrapper and options ---------- */

export const MenuBarWrapper = styled.div`
  background: #f2f2f2;
  height: 100vh;
  padding-right: 40px;
`;

export const MenuBarOptions = styled.ul`
  //list of options are centered and placed in grid format
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    //reduces a little the space between the grid for better looking on smaller screens
    grid-template-rows: repeat(6, 60px);
  }
`;

export const MenuBarLink = styled(Link)`
  //individual Links of the MenuBar
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 62px;
  transition: 0.2s ease-in-out;
  color: #540f16;
  border-bottom: 1px solid #ffffff;
  transform: rotate(-0.09deg);

  &:hover {
    color: #9d2c29;
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;
