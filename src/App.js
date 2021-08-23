import React, {useState} from "react";
import NavBar from "./components/nav-bar/nav-bar.components";
import Footer from "./components/footer/footer.components";
import Banner from "./components/banner/banner.components";
import "./App.css";
import SideBar from "./components/SideBar/SideBar.components";



const App = () => {
  const [isOpen, setIsOpen] = useState(false); //setting initial state of "isOpen" to false
  const toggle = () => {
    setIsOpen(!isOpen) //every time it is clicked, toggles the current state
  }
  

    return (
      <div className="App">
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle}/>
        <Banner/>
        <Footer/>
      </div>
    );

}

export default App;
