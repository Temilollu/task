import React from "react";
import "./Home.css";
import downArrow from "../../assets/down-arrow.png";
import hiv from "../../assets/hiv-and-blood.png";
import lungs from "../../assets/lungs.png";
import hand from "../../assets/blood-pressure-check.png";
const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <div className="first">
          <div className="text">AFYA</div>
          <div className="number">143.00</div>
          <p className="bal">Balance</p>
        </div>
        <div className="second">
          <div className="text">ZAR</div>
          <div className="number">R21</div>
          <p className="bal">Equivalent</p>
        </div>
      </div>
      <div className="send-currency">
        <p className="heading">Select currency</p>
        <div className="dropdown">
          <div className="inp">
            AFYA <img src={downArrow} alt="" />
          </div>
          <input type="number" name="" id="" />
        </div>
        <div className="buttons">
          <button>SEND</button>
          <button>RECEIVE</button>
        </div>
       
      </div>
      <div className="recent-activity">
          <div className="heading">recent activity</div>
          <div className="content">
            <div className="hiv">
              <img src={hiv} alt="" />
              <p>HIV blood draw test</p>
              <p>A100</p>
            </div>

            <div className="hiv">
              <img src={lungs} alt="" />
              <p>TB Radiology xray</p>
              <p>A30</p>
            </div>

            <div className="hiv">
              <img src={hand} alt="" />
              <p>Blood pressure check</p>
              <p>A10</p>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
    </div>
  );
};

export default Home;
