import React from "react";

function MoreInfoButton({ project }) {
  const [moreInfoShown, setMoreInfoShown] = React.useState(null);

  return (
    <>
      <button
        className="btn-project more-info-btn-1"
        onClick={() => {
          setMoreInfoShown(!moreInfoShown);
          console.log(moreInfoShown);
        }}
      >
        {!moreInfoShown ? "More Info..." : "Close"}
      </button>
      {moreInfoShown && (
        <div className="text-holder">{project.description}</div>
      )}
    </>
  );
}

export default MoreInfoButton;
