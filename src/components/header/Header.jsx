import "./header.css";
import { useState } from "react";
import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import Navbar from "./Navbar";

const Header = () => {
   const [toggle, setToggle] = useState(false);
   
  return (
    <header className="header">
      <HeaderTop setToggle={setToggle} toggle={toggle} />
      <HeaderMiddle />
      <Navbar setToggle={setToggle} toggle={toggle} />
      
    </header>
  );
};

export default Header;
