import React, { useEffect, useState } from "react";
import "./home.scss";

import Header from "../../components/Header/Header";
import AboutDesc from "../../components/about-desc/AboutDesc";
import Services from "../../components/services/Services";
import Technology from "../../components/technologies/Technology";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import MediaQuery from "../../components/media-query/MediaQuery";
import MobileHeader from "../../components/Header/mobile-header/MobileHeader";
import Contact from "../contact/Contact";

function SocialBtn() {
  const AboutDescVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", damping: 20, stiffness: 90 },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={AboutDescVariants}
        className="sticky-social-btn-container"
      >
        <div className="social_btn_box">
          <div className="social_btn_flex">
            <Link>
              <i className="fa-brands fa-linkedin"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function TopBtn() {
  const TopBtnAnimation = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: { type: "spring", damping: 20, stiffness: 90 },
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={TopBtnAnimation}
        className="sticky-Top-btn-container"
      >
        <div className="top_btn_box">
          <div className="top_btn_flex">
            <Link
              to="sectionNav"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <i class="fa-regular fa-circle-arrow-up"></i>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}

function Home() {
  const isDesktop = MediaQuery("(min-width:992px)");
  return (
    <div className="container">
      {/* <Header /> */}
      <section id="sectionHeader">
        {isDesktop ? <Header /> : <MobileHeader />}
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section id="section1">
        <AboutDesc />
      </section>
      <br />
      <section id="section3">
        <Services />
      </section>
      <br />
      <Technology />
      <br />
      <br />
      <br />
      <br />
      <section id="section2">
        <Contact />
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <SocialBtn />
      <section id="sectionHeader">
        <TopBtn />
      </section>
    </div>
  );
}

export default Home;
