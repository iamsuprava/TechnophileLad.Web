import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavbarFooter from "./components/Layout/NavbarFooter";
import "./App.css";
import SmoothScroll from "smooth-scroll";
import FaqPage from "./pages/Faq";
import FromPage from "./pages/From";
import AboutPage from "./pages/About";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">{/* <Route path="/" element={< />} /> */}</Route>
      <Route path="/" element={<NavbarFooter />}>
        <Route index element={<Home />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FromPage />} />
      </Route>
      {/* 
       With A Different Layout
       <Route path="/" element={<Layout2 />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route> 
      */}
    </Routes>
  </BrowserRouter>
);

export default App;
