import { PROJECTS } from "../../data/projects";
import MoreInfoButton from "./MoreInfoButton";

const Projects = () => (
  <div id="portfolio-link" className="projects-container">
    {PROJECTS.map((project) => (
      <div className="project-1 project" key={project.id}>
        <a href={project.link} target="_blank" rel="noreferrer">
          <div className="img-container">
            <img src={project.image} className="photo-reflection photo-project" alt={project.title} />
          </div>
          <p className="project-title project-title-1">{project.title}</p>
        </a>
        <a href={project.github} target="_blank" className="project-details" rel="noreferrer">
          View Project Files
          <i className="fas fa-arrow-circle-right" />
        </a>
        <MoreInfoButton project={project} />
      </div>
    ))}
  </div>
);

export default Projects;
