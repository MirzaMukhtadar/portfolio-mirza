import React from "react";
import "./services.scss";
import Image from "../../assets/image/logo_frontttt.png";
import Image2 from "../../assets/image/react-7578010.png";
import Image3 from "../../assets/image/javascript-7577991.png";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Services() {
  const serviceData = [
    {
      title: "Front-End Development",
      img: Image,
      desc: "Enterprise-class websites need consistent colors, fonts, and design to match the organization's branding guidelines. I can design responsive websites, with CSS , HTML at the core of front end development alongside JavaScript and JS Libraries Like Reactjs with Reuseable components.",
    },

    {
      title: "React JS Development",
      img: Image2,
      desc: "ReactJS is renowned for its extensibility, adjustability, and convenience.  create complex software for your business, including web browsers and mobile application user interfaces.",
    },
    {
      title: "Javascript Development",
      img: Image3,
      desc: "JavaScript frameworks sit at the heart of any modern website.  use their extensive experience with core JavaScript development and the newest frameworks and libraries to build dynamic and responsive websites.",
    },
  ];

  const serviceScroll = {
    offscreen: {
      y: 300,
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
    <motion.div // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.9 }}
      // transition={{ type: "spring", stiffness: 100, damping: 17 }}
      // initial={{ opacity: 0 }}

      initial="offscreen"
      whileInView="onscreen"
      variants={serviceScroll}
    >
      <h3 className="text-center">Services which I Provide</h3>
      <div className="center_services">
        <div className="services_flex">
          {serviceData.map((item, index) => {
            return (
              <motion.div key={index} className="services_box">
                <LazyLoadImage effect="blur" src={item.img} alt="" />

                <h4 className="text-center">{item.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </motion.div>
  );
}

export default Services;
