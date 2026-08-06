import { Project } from "../../types/project";

type Props = {
  project: Project;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const MoreInfoButton = ({ project, isOpen, onOpen, onClose }: Props) => (
  <>
    <div className="project-actions">
      {project.npm && (
        <a href={project.npm} target="_blank" rel="noreferrer" className="project-details">
          <i className="fab fa-npm" /> NPM Package
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" className="project-details">
          <i className="fab fa-github" /> View Files
        </a>
      )}
      {!project.npm && !project.github && (
        <span className="project-requires-login">
          <i className="fas fa-lock" /> Requires Login
        </span>
      )}
      <button type="button" className="btn-project" onClick={onOpen}>
        More Info
      </button>
    </div>
    {isOpen && (
      <div className="text-holder">
        <div className="text-holder-close">
          <button type="button" onClick={onClose}>×</button>
        </div>
        <p>{project.description}</p>
      </div>
    )}
  </>
);

export default MoreInfoButton;
