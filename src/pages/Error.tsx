import { useEffect } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="error-page">
      <div className="error-code">404</div>
      <h1 className="error-title">Page Not Found</h1>
      <p className="error-message">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link to="/" className="error-home-btn">Back to Homepage</Link>
    </div>
  );
};

export default Error;
