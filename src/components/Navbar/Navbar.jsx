import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClear, MdOutlineRestaurantMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import images from "../../constants/images";
import "./Navbar.css";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar_container">
        <div className="app__navbar-logo">
        <Link to='/'><img src={images.LOGO} alt="50Fin" /></Link>
          
        </div>
        <ul className="app__navbar-links ">
          {/* <li className="p__opensans"><a href="#home">HOME</a></li> */}
          <li className="p__opensans_nav">
            <Link to="/about">
              <p>ABOUT</p>
            </Link>
          </li>
          <li className="p__opensans_nav">
            <a href="#menu">COURSES</a>
          </li>
          <li className="p__opensans_nav">
            <a href="#awards">OUR PROJECTS</a>
          </li>
          {/* <li className="p__opensans"><a href="#contact">Contact</a></li> */}
        </ul>
          {/* <a href="#login" className="p__opensans">Get Early Access</a> */}
          <Link to="/form">
        <div className="app__navbar-login">
          <button
            type="button"
            className="custom__button_Nav"
            style={{ marginTop: "0.5rem" }}
          >
            Contact Me
          </button>
        </div>
            </Link>
          
          {/* <div /> */}
          {/* <a href="/" className="p__opensans">Get Started</a> */}
      </div>
      <div className="app__navbar-smallscreen ">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineClear
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              {/* <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li> */}
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About Us
                </a>
              </li>
              {/* <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Our Offerings
                </a>
              </li> */}
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
