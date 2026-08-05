import { useState } from "react";
import { PROJECTS } from "../../data/projects";
import MoreInfoButton from "./MoreInfoButton";

const Projects = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div id="portfolio-link" className="projects-container">
      {PROJECTS.map((project) => (
        <div className="project" key={project.id}>
          <a href={project.link} target="_blank" rel="noreferrer" className="project-image-link">
            <div className="img-container">
              <img src={project.image} className="photo-project" alt={project.title} />
            </div>
          </a>
          <div className="project-body">
            <a href={project.link} target="_blank" rel="noreferrer" className="project-title">
              {project.title}
            </a>
            <MoreInfoButton
              project={project}
              isOpen={openId === project.id}
              onOpen={() => setOpenId(openId === project.id ? null : project.id)}
              onClose={() => setOpenId(null)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
