import React from 'react';
import './Partners.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Partners = () => (
    AOS.init({
        // initialise with other settings
        duration: 2000
    }),

    <div className="partners_bg section__padding app__wrapper_info" >
        <div className="app__wrapper_info" data-aos="fade-up">
            {/* <SubHeading title="Contact" /> */}
            <h1 className=" partners_header" style={{ marginBottom: '3rem' }}>Our <font color="#24FEEE">Projects</font></h1>


        </div>

        <div className="app__wrapper_img partners_img" data-aos="fade-up">
            {/* <img src={images.Partners} alt="finus_img" /> */}
            <img id="img1" src={images.Partners} alt="50Fin_partners" />
            <img id="img2" src={images.Partners_mobile} alt="50Fin_partners" />
        </div>
    </div>
);

export default Partners;