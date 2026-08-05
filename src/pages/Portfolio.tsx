import "../style/style.scss";
import Projects from "../components/projects/Projects";
import Typewriter from "../components/typewriter/Typewriter";

const Portfolio = () => (
  <div className="content">
    <div className="hero-image">
      <div className="gradient-div-brand" />
      <div className="hero-text">
        <Typewriter
          text="My Name is Angel Angelov"
          text2="I'm a Software Developer"
          delay={100}
        />
      </div>
      <div className="scroll">
        <div
          className="scroll-down-arrow"
          onClick={() => (document.getElementById("portfolio-link") as HTMLElement).scrollIntoView({ behavior: "smooth" })}
          onKeyDown={() => (document.getElementById("portfolio-link") as HTMLElement).scrollIntoView({ behavior: "smooth" })}
          role="button"
          tabIndex={0}
        >
          Scroll Down
          <i className="fas fa-chevron-down" />
        </div>
      </div>
    </div>
    <Projects />
    <div
      className="scroll-up scroll-up-text"
      onClick={() => (document.getElementsByClassName("content")[0] as HTMLElement).scrollIntoView({ behavior: "smooth" })}
      onKeyDown={() => (document.getElementsByClassName("content")[0] as HTMLElement).scrollIntoView({ behavior: "smooth" })}
      role="button"
      tabIndex={0}
    >
      <i className="fas fa-chevron-up" />
      <br />
      Back To Top
    </div>
  </div>
);

export default Portfolio;
