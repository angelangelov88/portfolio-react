import { Link } from "react-router-dom";
import { SKILLS } from "../data/skills";

const AboutMe = () => (
  <>
    <div className="about-me-image-container">
      <div className="gradient-div-about-me" />
      <h1>About Me</h1>
    </div>
    <div id="about-me-text-container">
      <div className="about-me-text">
        <p>
          I&apos;m a Frontend Engineer based in Huntingdon, UK, with 4 years of experience at Legalesign — a secure enterprise eSignature platform. I specialise in React, TypeScript and GraphQL, with a track record of architecting high-performance applications from prototype to production. I&apos;m a strategic decision-maker who saved 2–3 months in development costs through smart architectural choices.
        </p>

        <p>
          I started my web development journey in February 2021 after a Covid-related redundancy, completing an intensive software development course with Netmatters. I landed my first role as a Junior Software Developer at Legalesign, where I have grown into a Frontend Engineer over the past 4 years. I have worked with React, TypeScript, GraphQL, AWS, HTML, CSS (SASS and Tailwind), REST API.
        </p>
        <p>
          When I&apos;m not coding I&apos;m most probably watching football or out for a walk in the nature with my dog. I also love travelling and exploring the world and new cultures.
        </p>

        <h2>Professional Experience</h2>

        <h3>Frontend Engineer — Legalesign <span>(April 2022 – Present)</span></h3>
        <p>
          At Legalesign I have worked across multiple products and taken on increasing responsibility over time.
        </p>
        <ul>
          <li>
            <strong>Signing Application:</strong> Acted as Lead Developer for an embedded signing component, enabling customers to integrate Legalesign directly into their platforms. Recommended and implemented a React core wrapped in Stencil.js, leveraging team expertise to save 2–3 months of development costs.
          </li>
          <li>
            <strong>Customer Console:</strong> Developed the flagship customer-facing admin panel for preparing and tracking critical document lifecycles. Translated complex Figma wireframes into pixel-perfect, responsive interfaces using Tailwind CSS.
          </li>
          <li>
            <strong>Component &amp; Widget Library:</strong> Built a comprehensive in-house library of reusable components and widgets using Stencil.js, TypeScript and Storybook. Automated deployment to NPM and implemented unit testing across the suite.
          </li>
          <li>
            <strong>CI/CD &amp; QA:</strong> Engineered robust CI/CD pipelines for all applications, automating version bumping and ensuring tests are part of the PR process. Led the adoption of Cypress across the company for E2E testing of mission-critical signing workflows.
          </li>
          <li>
            <strong>AI Productivity:</strong> Integrated Amazon Q and Claude to refactor legacy code and increase sprint velocity.
          </li>
          <li>
            <strong>Legacy Modernisation:</strong> Built a standalone analytics reporting tool, and engineered dedicated applications for internal support and high-concurrency enterprise distribution.
          </li>
        </ul>

        <h3>Partnerships Specialist — Booking.com <span>(2015 – 2020)</span></h3>
        <ul>
          <li>Managed high-value commercial relationships and led partner negotiation cycles.</li>
          <li>Worked on projects to improve partner visibility, analyse performance and present platform tools to partners.</li>
          <li>Recognised as one of the best performers, delivering excellent partner satisfaction.</li>
        </ul>

        <h3>Operations Manager — Menzies Hotels <span>(2014 – 2015)</span></h3>
        <ul>
          <li>Managed a team of 5 to deliver exceptional customer service.</li>
          <li>Worked closely with department heads and the General Manager on budgets, revenue proposals and forecasting.</li>
        </ul>

        <h2>Education</h2>
        <ul>
          <li><strong>Scion Coalition Scheme</strong> — Intensive 40-hour/week developer training programme</li>
          <li><strong>Robert Gordon University</strong> — MSc in International Tourism and Hospitality Management</li>
          <li><strong>Sofia University</strong> — BA in Geography</li>
        </ul>

        <p>
          All my projects can be seen on{" "}
          <Link to="/" className="about-me-links">My Portfolio Page</Link>
        </p>

        <p id="myCv">
          <a href="/Angel_Angelov_CV.pdf" target="_blank" rel="noreferrer" download="Angel_Angelov_CV.pdf">
            Download CV
            {" "}
            <i className="fas fa-file-download" />
          </a>
          <br />
          <a href="/Angel_Angelov_CV.pdf" target="_blank" rel="noreferrer">
            View CV
            {" "}
            <i className="fas fa-external-link-alt" />
          </a>
        </p>

        <h2>Technical Skills</h2>
        <div className="about-me-icons">
          <div className="icons-container">
            {SKILLS.map(({ label, faClass, image }) => (
              <div key={label} className="react-container">
                <div className="react-icon">
                  {faClass
                    ? <i className={`${faClass} logo-icon`} />
                    : <img src={image} className="logo-icon" alt={`${label}-logo`} />}
                </div>
                <div className="icon-text"><h4>{label}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);

export default AboutMe;
