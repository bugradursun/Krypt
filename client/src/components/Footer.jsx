import React from "react";
import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.25] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white">Market</p>
        <p className="text-white">Exchange</p>
        <p className="text-white">Tutorials</p>
        <p className="text-white">Wallets</p>
      </div>
    </div>
    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white">Come join us for the best service</p>
      <p className="text-white">bugradursuuun@gmail.com</p>
    </div>
    <div>
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@bdbdbbd2023</p>
        <p className="text-white text-left text-xs">All rights reserved</p>
      </div>
    </div>
  </div>
);

export default Footer;
