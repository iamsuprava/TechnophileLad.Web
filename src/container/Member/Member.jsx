import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Members.css";

const Member = () => (
  AOS.init({
    duration: 2000,
  }),
  (
    <div className="app__bg app__wrapper section__padding_members" id="contact">
      <div className="app__wrapper_info" data-aos="fade-right">
        <h1 id="member_header_web" className="headtext__cormorant_member">
          <font color="#000000">Ye Bhi</font> Dekh Lo
        </h1>
        <h1 id="member_header_android" className="headtext__cormorant_member">
          <font color="#000000">Ye Bhi</font> Dekh Lo
        </h1>
        <div className="app__wrapper_img" data-aos="fade-left">
          <img id="member_img_android" src={images.memberImg} alt="finus_img" />
        </div>
        <p
          className="p__cormorant_member"
          style={{ color: "#000000", marginTop: "2rem" }}
        >
          Visit our other pages as well. Thankyou :) 
        </p>
        <button
          type="button"
          className="custom__button_member"
          style={{ margin: "2rem, auto" }}
        >
          Contact Us 
        </button>
      </div>

      <div className="app__wrapper_img" data-aos="fade-left">
        <img id="member_img_web" src={images.findus} alt="finus_img" />
      </div>
    </div>
  )
);

export default Member;
