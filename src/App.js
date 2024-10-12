import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Aboutme from './aboutme';
import Achievements from './achievements';
import './App.css';
import Gallery from './gallery';
import Profex from './profex';
import Projects from './projects';
import Resume from './resume';

function App() {
  return (
    <BrowserRouter>
      <div className="App" id='div1'>
        <h1 id='head1'>JHANAVI DAVE'S PORTFOLIO</h1>
        <hr color='black' height='1.5px' />
        <nav id='nav1'>
          <NavLink to='/aboutme' className="link-style">About Me</NavLink>&nbsp;&nbsp;
          <NavLink to='/resume' className="link-style">Resume</NavLink>&nbsp;&nbsp;
          <NavLink to='/gallery' className="link-style">Gallery</NavLink>&nbsp;&nbsp;
          <NavLink to='/profex' className="link-style">Professional Experience</NavLink>&nbsp;&nbsp;
          <NavLink to='/projects' className="link-style">Projects</NavLink>&nbsp;&nbsp;
          <NavLink to='/achievements' className="link-style">Achievements</NavLink>
        </nav>
        </div>
        {/* <hr color='black' height='1.5px' /> */}
        <div>
        <Routes>
          {/* <Route path='/' element={<App />} className="route-style"/> */}
          <Route path='/aboutme' element={<Aboutme />} className="route-style" />
          <Route path='/resume' element={<Resume />} className="route-style" />
          <Route path='/gallery' element={<Gallery />} className="route-style" />
          <Route path='/profex' element={<Profex />} className="route-style" />
          <Route path='/projects' element={<Projects />} className="route-style" />
          <Route path='/achievements' element={<Achievements />} className="route-style" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
