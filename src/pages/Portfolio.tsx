import "../style/style.scss";
import Projects from "../components/projects/Projects";
import Typewriter from "../components/typewriter/Typewriter";

const Portfolio = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("portfolio-link");
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" });
  };

  return (
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
            onClick={scrollToProjects}
            onKeyDown={scrollToProjects}
            role="button"
            tabIndex={0}
            aria-label="Scroll to projects"
          >
            Scroll Down
            <i className="fas fa-chevron-down" />
          </div>
        </div>
      </div>
      <Projects />
      <div
        className="scroll-up scroll-up-text"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onKeyDown={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        role="button"
        tabIndex={0}
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up" />
        <br />
        Back To Top
      </div>
    </div>
  );
};

export default Portfolio;
