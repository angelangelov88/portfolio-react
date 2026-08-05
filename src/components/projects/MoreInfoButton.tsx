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
      <a href={project.github} target="_blank" rel="noreferrer" className="project-details">
        <i className="fab fa-github" /> View Files
      </a>
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
