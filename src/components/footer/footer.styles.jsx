import styled /*css*/ from "styled-components";
//Syntax for importing svg image {ReactComponent as blabla}
import { ReactComponent as Logo } from "../../assets/logo/angel-logo-footer.svg";
import { Link } from "react-router-dom"; //to use costum components, just import it and put as (prop)

//css block can be reused in any component. In this case it is being used for link and div
/*const OptionContainerStyles = css`
  //a little padding to leave a space between the options
  padding: 10px 15px;
  cursor: pointer;
`; */

export const FooterContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  //any child inside this component is separeted with as much space as possible
  justify-content: space-between;
  padding: 0.9375rem 0;
  text-align: center;
  z-index: 2;
  position: relative;
  background-color: #9d2c29;
  color: white;

  p {
    padding-left: 70px;
    margin: auto; //center the Copyright text
  }

`;

export const LogoContainer = styled.div`
  display: flex;
  font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 32px;
  color: #ffffff;

  @media screen and (max-width: 700px){
    padding: auto;
    margin: auto;
  }

`;

export const LogoBody = styled(Logo)`
  height: auto;
  min-width: 52px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-right: 50px;
  //flex-end means the most right side of the component
  justify-content: flex-end;
  
  @media screen and (max-width: 700px){
    display: contents;
  }
`;

//or we can create an unique style and use the key word "as=TypeOfComponent"
//e.g OptionLink as="div"
export const OptionLink = styled(Link)`
  //a little padding to leave a space between the options
  padding: 10px 15px;
  cursor: pointer;
  font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  text-align: right;
  text-decoration-line: underline;
  color: #ffffff;

  @media screen and (max-width: 700px){
    margin: auto;
  }
`;
