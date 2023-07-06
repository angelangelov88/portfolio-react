/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  // Function to move the viewpoint to the projects when the link is clicked

  const handlePortfolioClick = () => {
    const element = document.getElementById("portfolio-link");
    if (element) { element.scrollIntoView({ behavior: "smooth" }); }
  };

  const handleContactClick = () => {
    const element = document.getElementById("contact");
    if (element) { element.scrollIntoView({ behavior: "smooth" }); }
  };

  const [mainNavBar, setMainNavBar] = React.useState(true);
  // Side navbar
  // I added variables for all the elements in order to make the code readable

  const navbar = document.getElementsByClassName("navbar")[0];
  const hamburger = document.getElementsByClassName("hamburger")[0];
  const { body } = document;
  const gradient = document.getElementsByClassName("gradient-div-brand")[0];
  const fontColor = document.getElementById("app");
  const scrollDisappear = document.getElementsByClassName("scroll")[0];
  const blocker = document.getElementsByClassName("blocker")[0];

  // This is the function that is triggered on click on burger menu button. It basically shows the sidebar, changes the colour of the background, the color of the hero text, stops the scrolling option for the page and shows the blocker div on top. This last thing allows the user to close the sidebar by clicking anywhere but on it.
  function openNav() {
    // navbar.style.display = "block";
    // // gradient.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    // fontColor.style.color = "#ffffff9e";
    // scrollDisappear.style.position = "initial";
    // blocker.style.zIndex = 100;
    // blocker.style.display = "block";
    // body.style.overflow = "hidden";
    console.log("openNav");
  }

  // The second function was needed because console gives errors as some of the properties in the first one are not available on other pages. This way on click it opens the sidenav for all pages but index.html
  // function openNav2() {
  //   navbar.style.display = "block";
  //   blocker.style.zIndex = 100;
  //   // blocker.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  //   blocker.style.display = "block";
  //   body.style.overflow = "hidden";
  // }

  // This is the function that closes the sidebar on clicking anywhere on the page but the sidebar
  function closeNav() {
    // navbar.style.display = "none";
    // navbar.style.backgroundColor = "none";
    // // gradient.style.backgroundColor = 'initial';
    // fontColor.style.color = "white";
    // scrollDisappear.style.position = "block";
    // blocker.style.zIndex = 0;
    // blocker.style.display = "none";
    // body.style.overflow = "auto";
    // hamburger.style.left = "0px";
    console.log("closeNav");
  }

  // Again second function for all the pages but index.html
  // function closeNav2() {
  //   navbar.style.display = "none";
  //   navbar.style.backgroundColor = "none";
  //   // gradient.style.backgroundColor = 'initial';
  //   // fontColor.style.color = 'white';
  //   // scrollDisappear.style.position = 'block';
  //   blocker.style.zIndex = 0;
  //   // blocker.style.backgroundColor = 'initial';
  //   blocker.style.display = "none";
  //   body.style.overflow = "auto";
  //   hamburger.style.left = "0px";
  // }

  // Second function for all the pages but index.html. It does absolutely the same as the next one but ignores some of the elements that do not exist on those pages
  function showNavbar2(y) {
    if (y.matches) { // If media query matches
      if (navbar && hamburger && body && blocker) {
        navbar.style.display = "block";
        blocker.style.display = "none";
        body.style.overflow = "auto";
        hamburger.style.left = "0px";
        blocker.style.backgroundColor = "initial";
      }
    } else if (navbar) {
      navbar.style.display = "none";
    }
  }

  const y = window.matchMedia("(min-width: 768px)");
  showNavbar2(y); // Call listener function at run time
  y.addListener(showNavbar2); // Attach listener function on state changes

  // This has been added in order to make sure that the sidebar for small screens disappears if the user changes their viewport. Now they can change between small and big screen and there should be no issues.
  function showNavbar(x) {
    if (navbar && hamburger && body && blocker && gradient && fontColor && scrollDisappear) {
      if (x.matches) { // If media query matches
        navbar.style.display = "block";
        blocker.style.zIndex = 0;
        gradient.style.backgroundColor = "initial";
        fontColor.style.color = "white";
        scrollDisappear.style.position = "block";
        blocker.style.zIndex = 0;
        body.style.overflow = "auto";
        hamburger.style.left = "0px";
      } else {
        navbar.style.display = "none";
      }
    }
  }

  const x = window.matchMedia("(min-width: 768px)");
  showNavbar(x); // Call listener function at run time
  x.addListener(showNavbar); // Attach listener function on state changes

  return (
    <header>
      {/* // <!-- SIDE NAVBAR for screens over M--> */}
      {mainNavBar && (
        <nav className="navbar">
          <div className="logo">
            <NavLink to="/">A</NavLink>
          </div>
          <div className="navbar-items">
            <div className="about-me">
              <NavLink to="/about-me">About Me</NavLink>
            </div>
            <div className="my-portfolio">
              <NavLink to="./#portfolio-link" onClick={handlePortfolioClick}>My Portfolio</NavLink>
            </div>
            {/* <div className="coding-examples">
                <a href="coding-examples.html">Coding Examples</a>
              </div> */}
            {/* <div className="scs">
                <a href="scs-scheme.html">SCS Scheme</a>
              </div> */}
          </div>
          <div className="contact-me">
            <NavLink to="/" onClick={handleContactClick}>Contact Me</NavLink>
          </div>

          {/* <div className="contact-me">
              <a href="#contact">Contact Me</a>
            </div> */}
          <div className="social-media">
            <div className="social-links">
              <div className="gap" />
              <a className="github" href="https://github.com/angelangelov88" target="_blank" rel="noreferrer">
                <i className="fab fa-github social-logo" />
              </a>
              <div className="gap" />
              <a className="linkedin" href="https://www.linkedin.com/in/ang-angelov/" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin-in social-logo" />
              </a>
              {/* <div className="gap"></div>
                  <a className="facebook" href="https://www.facebook.com/ang.angelov88" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f social-logo"></i>
                  </a>
                    <div className="gap"></div>
                  <a className="twitter" href="https://twitter.com/Angel69010637" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter social-logo"></i>
                  </a> */}
            </div>
          </div>
        </nav>
      )}

      {/* Small hamburger style navbar for small screens */}
      <div
        className="blocker"
        onClick={closeNav()}
        onKeyDown={closeNav()}
      />

      <div
        className="hamburger"
        onClick={openNav()}
      >
        <div id="menu-lines">
          <div className="menu-line" />
          <div className="menu-line" />
          <div className="menu-line" />
        </div>
        <p className="hamburger-title">MENU</p>
      </div>
    </header>

  );
}

export default Navigation;
