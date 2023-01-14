import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => (
  AOS.init({
    // initialise with other settings
    duration: 2000,
  }),
  AOS.init({ disable: "mobile" }),
  (

    <>
      <div style={{ height: "100px", width: "100%" }}></div>
      <div className=" app__wrapper section__padding app_about app__bg">
        <div
          className="app__wrapper_img app__wrapper_img-reverse about_img"
        // data-aos="fade-right"
        >
          <img id="about_IMG_Web" src={images.About_img_ill} alt="50Fin" />
        </div>

        <div className="app__wrapper_info">
          {/* <SubHeading title="50Fin" /> */}
          <h1 className="headtext__cormorant" data-aos="fade-up">
            <font color="#000000">About</font> Me
          </h1>
          <div
            className="app__wrapper_img app__wrapper_img-reverse about_img"
            data-aos="fade-right"
          >
            <img
              id="about_IMG_Android"
              src={images.About_img_ill}
              alt="50Fin"
              style={{ margin: "0 auto" }}
            />
          </div>

          <Link to="/form">
            <div
              className="app__chef-content"
              data-aos="fade-up"
              data-aos-delay="50"
            >

              <p className="p__opensans about_p_padding">
              I'm currently pursuing Btech from Ramaiah University, Bangalore 🎓 with a nanodegree on observational astronomy ✨.
I have been doing freelancing on UI designing/Brand Asset Designing/WordPress Web dev/advertisement designing/Web Dev/cross-platform dev from last 3 years and have also worked as an intern on few startups. And sometimes I appear on YouTube ❤️.

I occasionally make podcasts, write books and make videos on a broad spectrum.
And I like to paint 🖌️ , play chess ♟️ and observe various deep space objects.🔭
              </p>
              <button
                type="button"
                className="custom__button"
                style={{ marginTop: "2rem" }}
                data-aos="fade-up"
              >
                View More
              </button>

            </div>

          </Link>
        </div>
      </div>
    </>
  )
);

export default About;
