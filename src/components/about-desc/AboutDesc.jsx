import React, { useEffect, useState } from "react";
import "./aboutDesc.scss";
import { motion } from "framer-motion";

export default function AboutDesc() {
  const AboutDescVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 90 },
    },
  };

  const careerDesc = {
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
  const techData = [
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "JavaScript",
    },
    {
      name: "SCC",
    },
    {
      name: "React JS",
    },
    {
      name: "Redux",
    },
    {
      name: "Tailwinf",
    },
    {
      name: "Material UI",
    },
    {
      name: "Bootstrap",
    },
    {
      name: "Responsive Design",
    },
    {
      name: "API's",
    },
    {
      name: "Wireframing",
    },
  ];

  return (
    <motion.div
      className="container"
      // initial="hidden"
      // animate="visible"
      // variants={AboutDescVariants}
    >
      <div className="flex_about_desc">
        <div className="width_div">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={careerDesc}
            className="about_me_desc"
          >
            <h3>My Career So Far</h3>
            <span></span>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur cumque nemo vitae nesciunt, unde enim earum sequi
              voluptates dolores, rem quis ea voluptas maiores voluptate quidem
              voluptatem non repellat laudantium eos sapiente optio in?
              Possimus, voluptas accusantium placeat ad consequuntur, velit
              voluptatem illo eligendi similique animi voluptatibus eveniet
              necessitatibus dicta.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={SkillsDesc}
            className="my_skills"
          >
            {techData.map((itme, index) => {
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial="initial"
                  className="btn_skills"
                >
                  {itme.name}
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
