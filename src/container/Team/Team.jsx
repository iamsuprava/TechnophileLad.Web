// import ReactDOM from 'https://esm.sh/react-dom@18.2.0'
import React from "react";
import "./Team.css";
import { images } from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const componentArray = [
  <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src={images.F1} />
      </div>
      <div class="contentBx">
        <h2>Aditya Srinivas Prasad</h2>
        <div class="color">
          <h3>
            B.Sc Econometrics, B.A Public Policy, MSc ENTR Management Founder -
            A.S Chang (Acquired)
          </h3>
        </div>
        <a href="#">VISIT</a>
      </div>
    </div>
  </div>,
  <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src={images.F2} />
      </div>
      <div class="contentBx">
        <h2>Darpan Tanna</h2>
        <div class="color">
          <h3>B.Sc Computer Science, Ex - Leasera</h3>
        </div>
        <a href="#">VISIT</a>
      </div>
    </div>
  </div>,
  <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src={images.F3} />
      </div>
      <div class="contentBx">
        <h2>Jyotishka Phatowali</h2>
        <div class="color">
          <h3>B.Des Industrial & Product Design , Ex - UClean</h3>
        </div>
        <a href="#">VISIT</a>
      </div>
    </div>
  </div>,
  <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src={images.F4} />
      </div>
      <div class="contentBx">
        <h2>Vineet Tomar</h2>
        <div class="color">
          <h3>B.Tech Computer Science,
            Ex - MPL</h3>
        </div>
        <a href="#">VISIT</a>
      </div>
    </div>
  </div>,
  <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src={images.F5} />
      </div>
      <div class="contentBx">
        <h2>Aayush Goyal</h2>
        <div class="color">
          <h3>B.Tech Electronic & Communication Engineering
            Founder - Deriva
          </h3>
        </div>
        <a href="#">VISIT</a>
      </div>
    </div>
  </div>,
  <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src={images.F6} />
      </div>
      <div class="contentBx">
        <h2>Dr Ashwin Jayasingh</h2>
        <div class="color">
          <h3>Zonal Business Manager- South and East India- Aditya Birla Capital
          </h3>
        </div>
        <a href="#">VISIT</a>
      </div>
    </div>
  </div>,
  <div class="container">
    <div class="card">
      <div class="imgBx">
        <img src={images.F7} />
      </div>
      <div class="contentBx">
        <h2>Vineet Tandon </h2>
        <div class="color">
          <h3>Founding Partner of CAPITAL 9 
          </h3>
        </div>
        <a href="#">VISIT</a>
      </div>
    </div>
  </div>,
];

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centralPadding: 400,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          arrows: false,
          infinite: false,
          dots: false,
          centerMode: true,
          centerPadding: 10,
        },
      },
    ],
  };
  return (
    <div className="slider_container">
      <div className="app__wrapper_info" data-aos="fade-up">
        <h1 className="headtext__cormorant_team">
          <font color="#ffffff">Our</font> Team
        </h1>
      </div>
      <Slider {...settings}>
        {componentArray.map((element) => {
          return <div className="content_team">{element}</div>;
        })}
      </Slider>
    </div>
  );
};

export default Team;
