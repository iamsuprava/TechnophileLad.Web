import { Link } from "react-router-dom";
import { images } from "../../constants";

import React from "react";
import { blog } from "../../dummydata.js";
import "./footer1.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container padding">
          <div className="box logo">
            <div className="footer_logo">
              <Link to="/">
                {" "}
                <img
                  className="footer_logo_div"
                  src={images.logo2}
                  alt="Technophile Lad"
                />
              </Link>
            </div>

            <p className="bio">
            goal is to provide informative and engaging content that will help you stay up-to-date with the ever-evolving world of technology.
            </p>

            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-linkedin icon"></i>
            <i className="fab fa-instagram icon"></i>
          </div>
          <div className="box link">
            <h3>COMPANY</h3>
            <ul>
              <li>ABOUT</li>
              <Link to="/faq">
                <li>FAQ</li>
              </Link>
              {/* <li>FAQ</li> */}
              <li>PROJECTS</li>
              <li>JOIN TRIBE</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div className="box link">
            <h3>Quick Links</h3>
            <ul>
              {/* <li>Contact Us</li> */}
              {/* <li>Pricing</li> */}
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div className="box">
            <h3>PROJECTS</h3>
            {blog.slice(0, 3).map((val) => (
              <div className="items flexSB">
                <div className="img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <span>
                    <i className="fa fa-calendar-alt"></i>
                    <label htmlFor="">{val.date}</label>
                  </span>
                  <span>
                    <i className="fa fa-user"></i>
                    <label htmlFor="">{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className="box last">
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className="fa fa-map"></i>
               Idhar Kay likhu ab?
              </li>
              {/* <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li> */}
              <li>
                <i className="fa fa-paper-plane"></i>
                technophilelad@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        {/* <hr class="solid"></hr> */}
        <p className="disclaimer">
          Disclaimer : Disclaimer bhi chiye ab?
        </p>
        <p>Copyright ©2022 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
