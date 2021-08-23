import { Link } from "react-router-dom";
import styled from "styled-components";
//Syntax for importing svg image {ReactComponent as blabla}
import { ReactComponent as Logo } from "../../assets/logo/ThermAid-logo-navBar.svg";
import { ReactComponent as Icon } from "../../assets/icon-menu-mobile.svg";


export const Nav = styled.nav`
  background: rgba(242, 242, 242, 0.85);
  box-shadow: 0px 0px 20px rgba(84, 15, 22, 0.4);
  height: 70px;
  margin-top: -70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  height: 70px;
  width: 100%;
  //max-width: 1100px;
  display: flex;
  z-index: 1;
  padding: 0 25px;
  //any child inside this component is separeted with as much space as possible
  justify-content: space-between;
  background: rgba(242, 242, 242, 0.85);
  box-shadow: 0px 0px 20px rgba(84, 15, 22, 0.4);
`;

export const LogoContainer = styled.div`
  margin-left: 25px;
  justify-self: flex-start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled(Logo)`
  height: auto;
  width: 100px;
`;

export const OptionsContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 700px) { //disapears if screen is smaller than 700px
    display: none;
  }
`;

export const Option = styled.li`
  height: 70px;
`;


export const OptionLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  //a little padding to leave a space between the options
  padding: 0 1rem;
  cursor: pointer;
  color: #9D2C29;

  &.active {
    border-bottom: 3px solid #9D2C29;
  }
`;


export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 700px){ //shows mobile icon when screen is smaller than 700px
    display: block;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const MenuIcon = styled(Icon)`
`;