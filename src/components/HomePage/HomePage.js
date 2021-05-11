import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import css from "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-inner-container">
        <img src={logo} alt="logo" className="homepage-logo" />
      </div>
      <Link to="/create-profile" className="homepage-button">
        Find Love
      </Link>
    </div>
  );
};

export default HomePage;
