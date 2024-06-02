import React from "react";
import logo from "../assets/images/logo.svg";

function Navbar() {
  return (
    // Nav Container
    <nav className="container mx-auto p-6">
      {/* Flex Container For All Items */}
      <div className="flex items-center justify-between">
        {/* Flex Container For Logo and Menu */}
        <div className="flex items-center space-x-20">
          {/* Logo */}
          <img src={logo} alt="" />
          {/* Menu */}
          <div className="hidden space-x-8 font-bold md:flex">
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Features
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-grayishViolet hover:text-veryDarkViolet"
            >
              Resources
            </a>
          </div>
        </div>
        {/* Flex container For Login and SignUp */}
        <div className="hidden items-center space-x-6 font-bold text-grayishViolet md:flex ">
          {/* Login */}
          <div  className="hover:text-veryDarkViolet">Login</div>
          {/* SignUp */}
          <a href="#" className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">SignUp</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
