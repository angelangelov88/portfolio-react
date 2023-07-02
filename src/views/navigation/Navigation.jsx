import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return ( 
        <header>
    {/* // <!-- SIDE NAVBAR for screens over M--> */}
          <nav class="navbar">
            <div class="logo">
              <NavLink to="/">A</NavLink>
            </div>
            <div class="navbar-items">
              <div class="about-me">
                <NavLink to="/about-me">About Me</NavLink>
              </div>
              <div class="my-portfolio">
                <a href="#portfolio-link">My Portfolio</a>
              </div>
              <div class="my-portfolio">
                <NavLink to="./#portfolio-link">My PortfolioR</NavLink>
              </div>
              {/* <div class="coding-examples">
                <a href="coding-examples.html">Coding Examples</a>
              </div> */}
              {/* <div class="scs">
                <a href="scs-scheme.html">SCS Scheme</a>
              </div> */}
            </div>
            <div class="contact-me">
              <a href="#contact">Contact Me</a>
            </div>
            <div class="social-media">
              <div class="social-links">
                  <div class="gap"></div>
                <a class="github" href="https://github.com/angelangelov88" target="_blank" rel="noreferrer">
                  <i class="fab fa-github social-logo"></i>
                </a>
                  <div class="gap"></div>
                <a class="linkedin" href="https://www.linkedin.com/in/ang-angelov/" target="_blank" rel="noreferrer">
                  <i class="fab fa-linkedin-in social-logo"></i>
                </a>
                  <div class="gap"></div>
                  <a class="facebook" href="https://www.facebook.com/ang.angelov88" target="_blank" rel="noreferrer">
                    <i class="fab fa-facebook-f social-logo"></i>
                  </a>
                    <div class="gap"></div>
                  <a class="twitter" href="https://twitter.com/Angel69010637" target="_blank" rel="noreferrer">
                    <i class="fab fa-twitter social-logo"></i>
                  </a>
              </div>
            </div>
          </nav>

    {/* Small hamburger style navbar for small screens */}
    <div class="blocker" onclick="closeNav()"></div>
    
          <div class="hamburger" onclick="openNav()">
              <div id="menu-lines">
                <div class="menu-line"></div>
                <div class="menu-line"></div>
                <div class="menu-line"></div>	
              </div>
              <p class="hamburger-title">MENU</p>							
          </div>
        </header>
      

   );
}
 
export default Navigation;
