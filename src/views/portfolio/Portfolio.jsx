/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "../../style/style.scss";
import Contact from "../contact/Contact";
import Projects from "../projects/Projects";
import Typewriter from "../typewriter/Typewriter";

function Portfolio() {
  // Email validation
  // const email = document.getElementById("email");
  // const validation = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  // const error = document.getElementById("error-message");

  // function emailValidationFunction() {
  //   if (email.value.match(validation)) {
  //     console.log("Email correct");
  //     error.style.display = "none";
  //     return true;
  //   }
  //   console.log("error with email");
  //   error.style.display = "block";
  //   return false;
  // }

  // document.getElementById("submit").addEventListener("click", emailValidationFunction);

  return (
    <>
      {/* Beginning of the main content. I have added content div to wrap everything up */}
      <div className="content">

        {/* <!-- Hero image and text part --> */}
        <div className="hero-image">
          <div className="gradient-div-brand" />
          <div className="hero-text">
            <Typewriter
              text="My Name is Angel Angelov"
              text2="I'm a Software Developer"
              delay={100}
            />
          </div>
          {/* <!-- Scroll down text and arrow --> */}
          <div className="scroll">
            <div className="scroll-down-arrow" onClick={() => document.getElementById("portfolio-link").scrollIntoView({ behavior: "smooth" })}>
              Scroll Down
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        </div>

        <Projects />
        <Contact />
        {/* <!--Scroll up button  --> */}
        <div className="scroll-up scroll-up-text" onClick={() => document.getElementsByClassName("content")[0].scrollIntoView({ behavior: "smooth" })}>
          <i className="fas fa-chevron-up" />
          <br />
          Back To Top
        </div>
      </div>
    </>
  );
}

export default Portfolio;
