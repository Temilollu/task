import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";
import Activity from "./Pages/Activity";
import Wallet from "./Pages/Wallet";
import Market from "./Pages/Market";
import Earn from "./Pages/Earn";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/activity" component={Activity} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/market" component={Market} />
        <Route exact path="/earn" component={Earn} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
