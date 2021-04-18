import React from "react";
import "./Footer.css";
import home from "../assets/house.png";
import activity from "../assets/activity.png";
import wallet from "../assets/wallet.png";
import market from "../assets/market.png";
import earn from "../assets/gift.png";
import { useHistory, useLocation } from "react-router";

const Footer = () => {
  const history = useHistory();
  const path = useLocation().pathname;
  const routes = [
    { path: "/", icon: home, name: "Home" },
    { path: "/activity", icon: activity, name: "Activity" },
    { path: "/wallet", icon: wallet, name: "Wallet" },
    { path: "/market", icon: market, name: "Market" },
    { path: "/earn", icon: earn, name: "Earn" },
  ];
  return (
    <div className="footer-container">
      {routes.map((item) => (
        <div
          onClick={() => history.push(item.path)}
          className={path === item.path ? "active" : "disabled"}
        >
          <img src={item.icon} alt={item.name} /> <span>{item.name} </span>
        </div>
      ))}
    </div>
  );
};

export default Footer;
