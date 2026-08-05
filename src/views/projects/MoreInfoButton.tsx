import React from "react";

type Project = {
  id: number;
  title: string;
  image: string;
  link: string;
  github: string;
  description: string;
};

const MoreInfoButton = ({ project }: { project: Project }) => {
  const [moreInfoShown, setMoreInfoShown] = React.useState(false);

  return (
    <>
      <button
        className="btn-project more-info-btn-1"
        onClick={() => setMoreInfoShown(!moreInfoShown)}
      >
        {!moreInfoShown ? "More Info..." : "Close"}
      </button>
      {moreInfoShown && (
        <div className="text-holder">{project.description}</div>
      )}
    </>
  );
};

export default MoreInfoButton;
