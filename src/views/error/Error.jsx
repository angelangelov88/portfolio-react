import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div style={{ "margin-left": "20%" }}>
      <h2>Error 404</h2>
      <h2>Page not found</h2>
      <h3>
        Go to the
        <Link to="/">Homepage</Link>
      </h3>
    </div>
  );
}

export default Error;
