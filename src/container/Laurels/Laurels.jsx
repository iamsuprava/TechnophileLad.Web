import React from "react";

import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  AOS.init({
    // initialise with other settings
    duration: 2000,
  }),
  (
    <div className="app__laurels_awards-card" data-aos="fade-up">
      <img src={imgUrl} alt="awards" />
      <div className="app__laurels_awards-card_content" data-aos="fade-up">
        <p className="p__cormorant" style={{ color: "#6371FF" }}>
          {title}
        </p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  )
);

const Laurels = () => (
  <div className="app__bg  section__padding" id="awards">
    <div className="app__wrapper_info" data-aos="fade-up">
      {/* <SubHeading title="Awards & recognition" /> */}
      <h1 className="headtext__cormorant_laurels">
        <font color="#ffffff">Founding</font> Team
      </h1>
    </div>

    <div className="app__wrapper_img" data-aos="fade-up">
      <img src={images.Members} alt="laurels_img" />
    </div>
  </div>
);

export default Laurels;
