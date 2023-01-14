import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Form from "../FormPage/form";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "aqua",
      mixBlendMode: "difference"
    },
    button: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "aqua",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");




  const [hide, setHide] = useState(false);
  if (window.location.pathname === "/form") {
    return <Form />;
  }

  return (
    AOS.init({
      // initialise with other settings
      duration: 2000,
    }),
    (
      <div className="app__header  section__padding app__bg_hero">
        <div
          className="app__header  app__wrapper section__padding"
          id="home"
        >
          <div className="app__wrapper_info">
            {/* <SubHeading title="50Fin"/> */}
            {/* <h1 className='app__header-h2'>Meets</h1> */}
            <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}
              className="app__header-h1"
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-offset="200"
            >
              Hi this is <font color="#00FFF0">Technophile</font> Lad{" "}
            </h1>
            <motion.div
              className='cursor'
              variants={variants}
              animate={cursorVariant}
            />
            <p
              className="p__opensans" onMouseEnter={textEnter} onMouseLeave={textLeave}
              style={{ margin: "2rem 0", color: "#FFFFFF" }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Give me a problem, I will try to solve it using{" "}
              <font color="#24FEEE">Technology.</font>
            </p>
            <Link to='/form' className="button_link" > <button onMouseEnter={textEnter} onMouseLeave={textLeave}
              type="button"
              className="custom__button_form1"
              onClick={Header}
              data-aos="fade-up"
              data-aos-offset="200"
            >
              Contact Me
            </button></Link>
           
          </div>
        </div>
        <div className="centering">
          <div className=" app__wrapper_neimg">
            <img
              src={images.T1}
              className="app__wrapper_o"
              alt="header img"
            />
            <img
              src={images.T3}
              className="app__wrapper_o1"
              alt="header img"
            />
            <img
              src={images.T2}
              className="app__wrapper_o2"
              alt="header img"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Header;
