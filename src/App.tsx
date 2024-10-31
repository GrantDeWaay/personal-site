import React from 'react';
import GrainyOverlay from './components/GrainyOverlay';
import LayoutContainer from './components/LayoutContainer';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Links from './components/Links';

const App: React.FC = () => {
  return (
    <div className=''>
      
      <LayoutContainer>
        <Navbar />
        <Header />
        <About />
        <WorkExperience />
        <Projects />
        {/* <Links /> */}
      </LayoutContainer>
      <GrainyOverlay />
    </div>
  );
};

export default App;
