import React, { useState } from "react";
import { Link } from "react-router-dom"; // Smooth scrolling for links
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; // Hamburger and close icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-extrabold">
            YourLogo
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition duration-300"
          >
            Features
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition duration-300"
          >
            Pricing
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition duration-300"
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={isMenuOpen ? faTimes : faBars}
              size="lg"
              className="text-white"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu - Collapsed */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-indigo-600 p-4 absolute top-0 left-0 w-full mt-14`}
      >
        <div className="flex flex-col space-y-6 text-center">
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="text-white text-xl font-medium"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="text-white text-xl font-medium"
            onClick={toggleMenu}
          >
            Features
          </Link>
          <Link
            to="pricing"
            smooth={true}
            duration={500}
            className="text-white text-xl font-medium"
            onClick={toggleMenu}
          >
            Pricing
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white text-xl font-medium"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white text-xl font-medium"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
