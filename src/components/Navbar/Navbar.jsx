import React, { useEffect, useState } from "react";
import "./navbar.scss";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";
import MyImg from "../../assets/image/Free_Sample_By_Wix (1).jpg";
// import { Link } from "react-scroll";

const TypewriterEffect = ({ texts, speed, delay }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeout;
    let interval;

    if (isTyping) {
      // If currently typing, show characters one by one
      interval = setInterval(() => {
        const nextCharacter = currentText[displayedText.length];
        setDisplayedText((prevText) => prevText + nextCharacter);
        if (displayedText.length === currentText.length - 1) {
          // When text is fully displayed, pause for delay before starting to erase
          setIsTyping(false);
          clearInterval(interval);
          timeout = setTimeout(() => {
            setIsTyping(true);
            setDisplayedText("");
          }, delay);
        }
      }, speed);
    } else {
      // If currently erasing, remove characters one by one
      interval = setInterval(() => {
        setDisplayedText((prevText) => prevText.slice(0, -1));
        if (displayedText.length === 0) {
          // When text is erased, move to the next text
          setIsTyping(true);
          clearInterval(interval);
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop through the texts
        }
      }, speed / 2); // Erasing is twice as fast as typing
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [displayedText, currentTextIndex, speed, delay, isTyping, texts]);

  return <span className="typewriter-text-container">{displayedText}</span>;
};

function Navbar() {
  const texts = [
    "Front-End Developer...",
    "Web Designer...",
    "React Developer",
  ];
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const navbarVariants = {
    hidden: { y: "-100%" },
    visible: {
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 90 },
    },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={navbarVariants}>
      <div className="navbar">
        <div className="logo_nav">
          <Link to={"/"}>
            <img src={MyImg} alt="" />
          </Link>
        </div>
        {/* <span>
          <TypewriterEffect texts={texts} speed={200} delay={1000} />
        </span>{" "} */}
        <div className={click ? "nav_links active" : "nav_links"}>
          <Link
            activeClass="active"
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h4>About</h4>
          </Link>

          <Link
            activeClass="active"
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h4>Services</h4>
          </Link>
          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <h4>Contact</h4>
          </Link>
          <Link>
            <button>View Projects</button>
          </Link>
        </div>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </motion.div>
  );
}

export default Navbar;
