import './App.scss';
import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import Particles from "react-particles";
import {loadFull} from "tsparticles";
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

    const handleInit = async (main) => {
        await loadFull(main)
    }

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
            <Particles id="particles" options={particles} init={handleInit}/>
        }
        {
            renderParticleJsInAbout &&
            <Particles id="particles" options={particles} init={handleInit}/>
        }
        {
            renderParticleJsInSkills &&
            <Particles id="particles" options={particles} init={handleInit}/>
        }
        {
            renderParticleJsInPortfolio &&
            <Particles id="particles" options={particles} init={handleInit}/>
        }
        {
            renderParticleJsInContact &&
            <Particles id="particles" options={particles} init={handleInit}/>
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
