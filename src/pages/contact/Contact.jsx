import React from "react";
import "./contact.scss";
import { motion } from "framer-motion";

function Contact() {
  const contactScroll = {
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
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={contactScroll}
      className="contact_flex"
    >
      <div className="contact_form_box">
        <div className="contact_from_flex">
          {/* <div className="contact_me_text">
            <h1>Let's Work together, and build your brand</h1>
          </div> */}
          <div className="contact_form">
            <h1>Let's Work together, and build your brand !</h1>
            <div className="flex_inputs">
              <div className="div_lable_input">
                <label htmlFor="name">Name</label>
                <input className="text_field" type="text" id="name" />
              </div>
              <div className="div_lable_input">
                <label htmlFor="email">Email</label>
                <input className="text_field" type="text" id="email" />
              </div>
            </div>
            <label htmlFor="email">Message</label>
            <textarea
              className="text_field"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
