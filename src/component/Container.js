import React from "react";
import "../styles/Container.css";
import NavBar from "../component/NavBar.js";
import SearchConatiner from "./SearchContainer.jsx";
import Subscriber from "./Subscriber.jsx";
import Footer from "./Footer.js";
import SideBar from "./SideBar.js";
import Main from "./Main.js";
function Container(props) {
  // console.log(props.list);
  return (
    <div className="container">
      <div>
        <NavBar></NavBar>
      </div>
      <div className="search-container">
        <SearchConatiner />
      </div>
      <div className="main-container">
        <div className="left-container">
          <SideBar handleCheck={props.handleCheck} />
        </div>

        <div className="right-container">
          <Main list={props.list}  />
        </div>
      </div>
      <div className="footer-container">
        <Subscriber />
        <Footer />
      </div>
    </div>
  );
}
export default Container;
