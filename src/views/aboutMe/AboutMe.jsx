import React from "react";
import { Link } from "react-router-dom";
import jqueryImage from "../../images/jquery.png";
import tailwindIcon from "../../images/tailwind.png";
import grapfQLIcon from "../../images/graphql.png";

function AboutMe() {
  const element = document.getElementById("portfolio-link");
  if (element) { element.scrollIntoView({ behavior: "smooth" }); }

  return (
    <>
      <div className="about-me-image-container">
        <div className="gradient-div-about-me" />
        <h1>About Me</h1>
      </div>
      <div id="about-me-text-container">
        <div className="about-me-text">
          <p>
            My name is Angel and I am a Cambridge based software developer. I started my web development journey in February 2021 after a Covid related redundancy. I have completed an intensive software development course with Netmatters. After that I landed my first job as a Junior Software Developer at Legalesign. I am currently working with JavaScript/TypeScript and React. I am also learning AWS and GraphQL. I have worked with HTML and CSS (SASS and Tailwind), jQuery, SQL and PHP.
            <h2>Netmatter&apos;s Software Development Course</h2>
            My first project was to clone the
            {" "}
            <a href="http://reflection.angel-angelov.netmatters-scs.co.uk/" className="about-me-links" target="_blank" rel="noreferrer">Netmatters&apos; website</a>
            . I have done that at stages using the skills I&apos;ve just learnt. First I started with the HTML and CSS. I made sure the website is responsive and I used mobile first approach. Once I learnt Vanilla JavaScript, I added some features such as sticky header, hamburger menu, hero image slider, etc. At the end I added the PHP part which was to create a new Contact page with a contact form. I used PHP and SQL to get the user input and add it to a database. I also made all my pages PHP instead of HTML in order to re-use some elements such as header, footer and navbar. I used PHP to fetch data from the database and add the newscards on the page.
          </p>
          <p>After that I have worked on projects using JavaScript, React, Vue, PHP and WordPress. All my projects can be seen on</p>
          <Link to="/" className="about-me-links">
            <h4 className="about-me-text-h4">My Portfolio Page</h4>
          </Link>
          <h2>Junior Software Developer</h2>
          As a junior software developer at Legalesign, my role involve working with the React framework to develop and maintain software solutions for the company&apos;s platform. We have created a new application using React and TypeScript. I work closely with designers and other developers to ensure the best user experience and functionality. We use Figma for the design and GitHub for version control. I have also been working with GraphQL and AWS.
          <br />
          <p id="myCv">
            <a href="images/CV - Angel Angelov.pdf" download>
              Download My CV
              {" "}
              <i className="fas fa-file-pdf fa-5x" />
            </a>
          </p>
          <br />
          <p>
            I have started my journey quite recently but have gained invaluable knowledge and experience in a short period of time. I am interested to continue learning and improving my skills. After obtaining a degree in International Tourism Management and working for more than 5 years in the travel and tourism industry, I got the opportunity to start something new. I started this course in order to turn my career to a new direction. I have always been quite interested in technology and have been fixing friends and family computers since I was a kid.
          </p>
          When I am not coding I will most probably be watching football or go for a walk in the nature with my dog. I also love traveling and exploring the World and new cultures and places.
          <div className="about-me-icons">
            <div className="icons-container">
              <div className="html-container">
                <div className="html-icon">
                  <i className="fab fa-html5 logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>HTML</h4>
                </div>
              </div>
              <div className="css-container">
                <div className="css-icon">
                  <i className="fab fa-css3-alt logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>CSS</h4>
                </div>
              </div>
              <div className="jquery-container">
                <div className="jquery-icon">
                  <img src={tailwindIcon} className="logo-icon" alt="jquery-logo" />
                </div>
                <div className="icon-text">
                  <h4>tailwind</h4>
                </div>
              </div>
              <div className="html-container">
                <div className="sass-icon">
                  <i className="fab fa-sass logo-icon " />
                </div>
                <div className="icon-text">
                  <h4>SASS</h4>
                </div>
              </div>
              <div className="js-container">
                <div className="js-icon">
                  <i className="fab fa-js-square logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>JavaScript</h4>
                </div>
              </div>

              <div className="react-container">
                <div className="react-icon">
                  <i className="fab fa-react logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>React</h4>
                </div>
              </div>

              <div className="react-container">
                <div className="react-icon">
                  <i className="fab fa-brands fa-github logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>GitHub</h4>
                </div>
              </div>
              <div className="react-container">
                <div className="react-icon">
                  <i className="fab fa-vuejs logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>Vue</h4>
                </div>
              </div>

              <div className="react-container">
                <div className="react-icon">
                  <i className="fab fa-brands fa-node logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>Node.js</h4>
                </div>
              </div>
              <div className="jquery-container">
                <div className="jquery-icon">
                  <img src={jqueryImage} className="logo-icon" alt="jquery-logo" />
                </div>
                <div className="icon-text">
                  <h4>jQuery</h4>
                </div>
              </div>

              <div className="php-container">
                <div className="php-icon">
                  <i className="fab fa-php logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>PHP</h4>
                </div>
              </div>

              <div className="wordpress-container">
                <div className="wordpress-icon">
                  <i className="fab fa-wordpress logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>Wordpress</h4>
                </div>
              </div>
              <div className="sql-container">
                <div className="sql-icon">
                  <i className="fas fa-database logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>SQL</h4>
                </div>
              </div>
              <div className="wordpress-container">
                <div className="wordpress-icon">
                  <i className="fab fa-aws logo-icon" />
                </div>
                <div className="icon-text">
                  <h4>AWS</h4>
                </div>
              </div>
              <div className="jquery-container">
                <div className="jquery-icon">
                  <img src={grapfQLIcon} className="logo-icon" alt="jquery-logo" />
                </div>
                <div className="icon-text">
                  <h4>GraphQL</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default AboutMe;
