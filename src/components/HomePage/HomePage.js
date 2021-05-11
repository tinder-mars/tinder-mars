import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const HomePage = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Link to="/create-profile">Find Love</Link>
    </div>
  );
};

export default HomePage;
