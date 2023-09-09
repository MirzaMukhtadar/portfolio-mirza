import React from "react";
import "./technology.scss";
import { motion } from "framer-motion";
import Reactimg from "../../assets/image/react-7578010.png";
import Jsimg from "../../assets/image/javascript-7577991.png";
import HTMLimg from "../../assets/image/html-7578018.png";
import CSSimg from "../../assets/image/css-7578024.png";
import Sass from "../../assets/image/sass-7578019.png";

function Technology() {
  const techData = [
    {
      name: "React",
      img: Reactimg,
    },
    {
      name: "JS",
      img: Jsimg,
    },
    {
      name: "HTML",
      img: HTMLimg,
    },
    {
      name: "CSS",
      img: CSSimg,
    },
    {
      name: "SASS",
      img: Sass,
    },
  ];

  const TechScroll = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 50,
      opacity: 1,

      transition: {
        type: "spring",
        duration: 0.8,
        damping: 20,
        stiffness: 90,
      },
    },
  };
  return (
    <motion.div>
      <h3 className="text-center">Front-End Technologies I use</h3>
      <div className="flex_tech_boxes">
        {techData.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              variants={TechScroll}
              className="technology_box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100, damping: 17 }}
            >
              <img src={item.img} alt="" />
              <h4 className="text-center">{item.name}</h4>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Technology;
