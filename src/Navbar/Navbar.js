import React from "react";
import "./navbar.css";
import logo from "../assets/logo-test.png";
import person from "../assets/person-icon.png";
import notification from "../assets/notification.png"
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="logo" />
        ribbon
      </div>

      <div className="second">
        <img src={person} alt="person" />
        <img src={notification} alt="notifcation" />
      </div>
    </div>
  );
};

export default Navbar;
