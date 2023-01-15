import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Findus.css";

const FindUs = () => (
  AOS.init({
    // initialise with other settings
    duration: 2000,
  }),
  (
    <div className="app__findus app__wrapper section__padding app__bg" id="contact">
      <div className="app__wrapper_info" data-aos="fade-up">
        {/* <SubHeading title="Contact" /> */}
        <h1
          className="headtext__cormorant"
          style={{ marginTop: "0px" }}
          data-aos="fade-up"
        >
          <font color="#000000">
            My <font color="#24FEEE">Portfolio</font>
          </font>{" "}
        </h1>
        <div className="app__wrapper_img_android" data-aos="fade-left">
          <img id="findus_img_android" src={images.memberImg} alt="finus_img" />
        </div>
        <div className="app__wrapper-content">
          <p className="p__cormorant2" data-aos="fade-up">
            <font color="#006DDD">Innovation is the outcome of a habit, not a random act.</font>
          </p>
          <p className="p__opensans" data-aos="fade-up">
            Visit My Behance acount for more Designes or email me at technophilelad@gmail.com for business enquires.
          </p>
        </div>
        <button
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
          data-aos="fade-up"
        >
          Learn More {" "}
        </button>
      </div>
      <div
        className="app__wrapper_img find_us_wrapper_phone"
        data-aos="fade-left"
      >
        <img id="findus_img_web" src={images.memberImg} alt="finus_img" />
      </div>
    </div>
  )
);

export default FindUs;
