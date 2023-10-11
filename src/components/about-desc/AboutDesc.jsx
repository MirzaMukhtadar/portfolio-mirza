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
      name: "Tailwind",
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
              I Started my career as a Front-End Web Developer Intern at
              SKILLHUB IT SOLUTIONS, where I dedicated one year to honing my
              skills. During this time, I focused on creating seamless user
              experiences using ReactJS, CSS/SCSS, and JavaScript. I also gained
              proficiency in state management with Redux-Toolkit, as well as
              familiarity with the Context API. Following my internship, I
              continued to build my experience as a React Trainee with{" "}
              <a href="">Lucien Solutions</a>, collaborating closely with
              backend teams and fellow developers. <br /> My role emphasized
              bridging design and functionality to ensure highly responsive and
              visually appealing web interfaces. Now, I'm actively seeking new
              roles and projects to apply my skills and passion for web
              development, with an open mindset and a strong desire to create
              exceptional user experiences and drive business success.
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
