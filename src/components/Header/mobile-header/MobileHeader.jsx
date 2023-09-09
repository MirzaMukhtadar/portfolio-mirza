import React from "react";
import MyImage from "../../../assets/image/bg_dark_me.png";

// import "./mobileheader.scss";

function MobileHeader() {
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
      <div>
        {/* <motion.div
        className="container"
        initial="hidden"
        animate="visible"
        variants={homeVariants}
      ></motion.div> */}
        <div className="center_flex">
          <div className="header_flex">
            <div
              //   initial="hidden"
              //   animate="visible"
              //   variants={ImgDesc}
              className="header_img"
            >
              <img src={MyImage} alt="" />
            </div>
            <div
              //   initial="hidden"
              //   animate="visible"
              //   variants={SkillsDesc}
              className="header_about"
            >
              <h2>Hi I am Mirza</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                voluptatum sed minima voluptates eum et est labore officiis
                inventore, aliquid ut temporibus veritatis totam ea soluta
                veniam quisquam. Labore, veniam harum nihil placeat sapiente
                impedit doloribus iusto molestias voluptates quisquam, minima
                culpa, quo earum? Aspernatur rem sapiente assumenda optio
                deleniti sint accusamus qui facilis reiciendis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
