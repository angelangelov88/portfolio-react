import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const handlePortfolioClick = () => {
    const element = document.getElementById("portfolio-link");
    if (element) { element.scrollIntoView({ behavior: "smooth" }); }
  };

  const handleContactClick = () => {
    const element = document.getElementById("contact");
    if (element) { element.scrollIntoView({ behavior: "smooth" }); }
  };

  const [navbarOpen, setNavbarOpen] = useState(false);
  const windowWidth = useRef<number>(window.innerWidth);

  const toggleNavBar = () => {
    if (windowWidth.current < 768) {
      setNavbarOpen(!navbarOpen);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      windowWidth.current = window.innerWidth;
      if (windowWidth.current > 768) {
        setNavbarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = windowWidth.current < 768;

  return (
    <header>
      <nav
        className="navbar"
        style={{ display: navbarOpen ? "block" : "none" }}
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
        </div>
        <div className="contact-me">
          <NavLink to="/" onClick={handleContactClick}>Contact Me</NavLink>
        </div>
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
          </div>
        </div>
      </nav>

      <div
        className="blocker"
        style={{ display: navbarOpen ? "block" : "none" }}
        onClick={toggleNavBar}
        onKeyDown={toggleNavBar}
        role="button"
        tabIndex={0}
      />

      <div
        className="hamburger"
        style={{
          display: isSmallScreen && navbarOpen ? "block" : isSmallScreen && !navbarOpen ? "none" : "block",
          cursor: "pointer",
        }}
        onClick={toggleNavBar}
        onKeyDown={toggleNavBar}
        role="button"
        tabIndex={0}
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
};

export default Navigation;
