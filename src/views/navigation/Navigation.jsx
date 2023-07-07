/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from "react";
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

  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const windowWidth = useRef(window.innerWidth);

  // const toggleNavBar = () => {
  //   if (windowWidth?.current < 768) {
  //     setNavbarOpen(!navbarOpen);
  //   }
  // };

  // Effect to set navbarOpen to false when user resizes screen
  React.useEffect(() => {
    const handleResize = () => {
      windowWidth.current = window.innerWidth;
      if (windowWidth.current > 768) {
        setNavbarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      {/* // <!-- SIDE NAVBAR for screens over M--> */}
      <nav
        className="navbar"
        style={{
          // display:
          // windowWidth < 768 && navbarOpen ? "block"
          //   : windowWidth < 768 && !navbarOpen ? "none"
          //     : windowWidth > 768 && "block"
          display: navbarOpen ? "block" : "none",
        }}
      >
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

      {/* Small hamburger style navbar for small screens */}
      <div
        className="blocker"
        style={{
          display: navbarOpen ? "block" : "none",
          // display: "block",
        }}
        // onClick={toggleNavBar}
        // onKeyDown={toggleNavBar}
      />

      <div
        className="hamburger"
        style={{
          // display: "block",
          display: windowWidth < 768 && navbarOpen ? "block" : windowWidth < 768 && !navbarOpen ? "none" : windowWidth > 768 && "block",
          cursor: "pointer",
        }}
        // onClick={openNav}
        // onClick={toggleNavBar}
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
