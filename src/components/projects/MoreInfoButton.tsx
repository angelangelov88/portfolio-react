import { useState } from "react";
import { Project } from "../../types/project";

const MoreInfoButton = ({ project }: { project: Project }) => {
  const [moreInfoShown, setMoreInfoShown] = useState(false);

  return (
    <>
      <button
        className="btn-project more-info-btn-1"
        onClick={() => setMoreInfoShown(!moreInfoShown)}
      >
        {moreInfoShown ? "Close" : "More Info..."}
      </button>
      {moreInfoShown && (
        <div className="text-holder">{project.description}</div>
      )}
    </>
  );
};

export default MoreInfoButton;
