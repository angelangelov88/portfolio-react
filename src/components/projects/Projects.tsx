import { useState } from "react";
import { PROFESSIONAL_PROJECTS, PERSONAL_PROJECTS } from "../../data/projects";
import { Project } from "../../types/project";
import MoreInfoButton from "./MoreInfoButton";

const ProjectGrid = ({ projects, openId, setOpenId }: {
  projects: Project[];
  openId: number | null;
  setOpenId: (id: number | null) => void;
}) => (
  <div className="projects-container">
    {projects.map((project) => (
      <div className="project" key={project.id}>
        <div className="img-container">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="project-image-link">
              <img src={project.image} className="photo-project" alt={project.title} />
            </a>
          ) : (
            <img src={project.image} className="photo-project" alt={project.title} />
          )}
        </div>
        <div className="project-body">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="project-title">
              {project.title}
            </a>
          ) : (
            <span className="project-title">{project.title}</span>
          )}
          <MoreInfoButton
            project={project}
            isOpen={openId === project.id}
            onOpen={() => setOpenId(project.id)}
            onClose={() => setOpenId(null)}
          />
        </div>
      </div>
    ))}
  </div>
);

const Projects = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div id="portfolio-link">
      <h2 className="projects-section-title">Professional Work</h2>
      <ProjectGrid projects={PROFESSIONAL_PROJECTS} openId={openId} setOpenId={setOpenId} />
      <h2 className="projects-section-title">Personal Projects</h2>
      <ProjectGrid projects={PERSONAL_PROJECTS} openId={openId} setOpenId={setOpenId} />
    </div>
  );
};

export default Projects;
