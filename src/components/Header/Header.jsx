import React, { useEffect, useState } from "react";
import "./Header.scss";
import MyImage from "../../assets/image/bg_dark_me.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Header() {
  const homeVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 90 },
    },
  };
  const ImgDesc = {
    hidden: { x: "-50%" },
    visible: {
      x: 0,
      transition: { type: "spring", damping: 20, stiffness: 90 },
    },
  };
  const SkillsDesc = {
    hidden: { x: "50%" },
    visible: {
      x: 0,
      transition: { type: "spring", damping: 20, stiffness: 90 },
    },
  };

  return (
    <div>
      {/* <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={homeVariants}
      ></motion.div> */}
      <div className="center_flex">
        <div className="header_flex">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={ImgDesc}
            className="header_img"
          >
            <LazyLoadImage src={MyImage} alt="" effect="blur" />
            <img />
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={SkillsDesc}
            className="header_about"
          >
            <h2>Hi I am Mirza Mukhtadar</h2>

            <p>
              I'm a highly skilled Frontend Web Developer with a deep expertise
              in building captivating user interfaces and exceptional web
              experiences. With a strong foundation in ReactJS, JavaScript, CSS,
              and Bootstrap, I've dedicated my career to crafting elegant,
              functional, and responsive web applications that leave a lasting
              impression. One of my core strengths lies in Responsive Web
              Design, ensuring that every website I create is not only visually
              stunning but also seamlessly adaptable to various devices and
              screen sizes. This approach guarantees that users have an
              outstanding experience regardless of how they access the site.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Header;
