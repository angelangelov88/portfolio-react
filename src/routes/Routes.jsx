import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Navigation from '../views/navigation/Navigation';
import Portfolio from '../views/portfolio/Portfolio';
import AboutMe from '../views/aboutMe/AboutMe';


const AppRoutes = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about-me' element={<AboutMe />} />
      </Routes>
  </>     
);
}
 
export default AppRoutes;