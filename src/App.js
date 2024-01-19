import './App.scss';
import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Particles from "react-tsparticles";
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import NavBar from './components/navBar';
import particles from "./utils/particles";

function App() {

    const location = useLocation();
    console.log(location);



    const renderParticleJsInHome = location.pathname === "/";
    const renderParticleJsInAbout = location.pathname === "/about";
    const renderParticleJsInSkills= location.pathname === "/skills";
    const renderParticleJsInPortfolio = location.pathname === "/portfolio";
    const renderParticleJsInContact = location.pathname === "/contact";

  return (
    <div className='App'>
      {/* particles js */}

        {
            renderParticleJsInHome &&
            <Particles id="particles" options={particles}/>
        }
        {
            renderParticleJsInAbout &&
            <Particles id="particles" options={particles}/>
        }
        {
            renderParticleJsInSkills &&
            <Particles id="particles" options={particles}/>
        }
        {
            renderParticleJsInPortfolio &&
            <Particles id="particles" options={particles}/>
        }
        {
            renderParticleJsInContact &&
            <Particles id="particles" options={particles}/>
        }

      {/* navbar */}
      <NavBar/>

      {/* main page content */}
        <div className="App_main-page-content">
            <Routes>
                <Route index path='/' element={<Home/>} />
                <Route index path='/about' element={<About/>}/>
                <Route index path='/resume' element={<Resume/>}/>
                <Route index path='/skills' element={<Skills/>}/>
                <Route index path='/portfolio' element={<Portfolio/>}/>
                <Route index path='/contact' element={<Contact/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
