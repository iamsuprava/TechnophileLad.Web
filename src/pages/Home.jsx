import React from "react";
import { useEffect } from "react";

import {
  About,
  FindUs,
  Header,
  Laurels,
  Cards,
  Member,
  Team,
  Partners,
} from "../container";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Cards />
      <About />

      <FindUs />

      <Partners />
      {/* <Laurels /> */}
      {/* <Team /> */}
      <Member />
    </>
  );
};

export default Home;
