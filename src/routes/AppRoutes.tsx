import { Route, Routes } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Portfolio from "../pages/Portfolio";
import AboutMe from "../pages/AboutMe";
import ContactPage from "../pages/Contact";
import Error from "../pages/Error";

const AppRoutes = () => (
  <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </>
);

export default AppRoutes;
