import React from "react";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Router>
        <AppRoutes />
      </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
