import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = ({ setToggle, toggle }) => {
  return (
    <div className="header-top">
      <div
        onClick={() => setToggle((prev) => !prev)}
        className="header-top-menu"
      >
        {toggle ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
      </div>
      <div className="header-top-phone">
        <i className="bi bi-telephone-fill"></i>
        +20 10687309393
      </div>
      
      <Link to="/" className="header-top-link">
        <i className="bi bi-person-fill"></i>
        Amr Zayed
      </Link>
    </div>
  );
};

export default HeaderTop;
