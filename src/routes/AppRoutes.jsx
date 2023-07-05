import { Route, Routes } from 'react-router-dom';
import Navigation from '../views/navigation/Navigation';
import Portfolio from '../views/portfolio/Portfolio';
import AboutMe from '../views/aboutMe/AboutMe';
import Error from '../views/error/Error';


const AppRoutes = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='*' element={<Error />} />
      </Routes>
  </>     
);
}
 
export default AppRoutes;