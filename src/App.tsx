import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <div className="App">
    <Router>
      <AppRoutes />
    </Router>
  </div>
);

export default App;
