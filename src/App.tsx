import React from 'react';
import Link from './components/Link';
import GrainyOverlay from './components/GrainyOverlay';
const App: React.FC = () => {
  return (
    <div className='relative'>

    
    <div className='bg-[#e0e5db]'>
      
    <div className="max-w-6xl mx-auto grid grid-cols-12 mb-8 p-6 gap-8 lg:auto-rows-auto">

      
      {/* Top Links Section */}
      
      <div className="col-span-12 text-right font-medium">
        <Link text="LinkedIn" url="https://www.linkedin.com/in/grant-dewaay/" />
        <span className="mx-4"></span>
        <Link text="GitHub" url="https://github.com/GrantDeWaay" />
        <span className="mx-4"></span>
        <Link text="Instagram" url="https://instagram.com/Grant.DeWaay" />
      </div>
      

      {/*Heading Section*/}
      <div className="col-span-12 row-span-2 row-start-2">
        <h1 className="text-6xl md:text-7xl font-bold font-sans text-center text-[#292928]">Grant DeWaay</h1>
        {/* <h1 className="text-7xl font-bold font-sans text-gray-700">Software Engineering</h1> */}
      </div>

      {/* About Me Section */}
      <div className="col-span-12 md:col-span-4">
        <h3 className="text-2xl font-bold tracking-wide ">About Me</h3>
      </div>
      <div className="col-span-12 md:col-span-8 text-lg leading-relaxed">
        <p>
        Hi! I'm Grant, a software engineering student at Iowa State University with a secondary major in interdisciplinary design. I grew up in Des Moines, IA, where I developed a passion for tech, and now I focus on creating efficient, well-designed software. My career interests lie in distributed systems for their scalability and innovation potential.

        <p className="mt-4">
        Outside of coding, I'm either on the pickleball court, cheering on the Denver Nuggets, or collecting rare Sega Dreamcast games. Let's connect—I'm always up for new ideas, collaborations, or a great pickleball game!        </p>
        </p>
      </div>

      {/* Work Experience Section */}
      <div className="col-span-12 md:col-span-4">
        <h3 className="text-2xl col-span-4 font-bold tracking-wide">Work Experience</h3>
      </div>
      <div className="col-span-12 md:col-span-8 text-lg leading-relaxed">
        <p><strong>Buildertrend</strong><br/></p>
        <p className="">
          Based in Omaha, Buildertrend is the largest developer of construction site management software.
          In my first summer at Buildertrend, I developed a semantic search prototype leading to the formation of the Silver Sky development team.
          During my second summer, I contributed to the RebateHawk project, showcasing my ability to innovate and improve software solutions.
        </p>
      </div>

      {/* Projects Section */}
      <div className="col-span-4 row-span-2">
        <h3 className="text-2xl font-bold tracking-wide">Projects</h3>
      </div>
      <div className='col-span-12 md:col-span-4 text-lg leading-relaxed text-faded-black'><strong>Harvard Burger</strong><br></br>Harvard burger is a burgerHarvard burger is a burgerHarvard burger is a burgerHarvard burger is a burgerHarvard burger is a burgerHarvard burger is a burger</div>

      <div className='col-span-12 md:col-span-4 text-lg leading-relaxed text-faded-black'><strong>League of Legends Voice Chat App (5-Peer WebRTC)</strong><br></br>This is a voice chat application that lets people join a voice chat with other people in their lobby by just going to this website and generating a unique URL </div>

      <div className='col-span-12 md:col-span-4 text-lg leading-relaxed text-faded-black'><strong>AI Checkers Bot</strong><br></br>Checkers bot that will always play optimally. Implemented using Monte-carlo trees and other AI fundamentals.</div>

      <div className='col-span-12 md:col-span-4 text-lg leading-relaxed text-faded-black'><strong>Spime: Transparent LCA for Consumer Products</strong><br></br>Spime is a Transparent LCA system that enables comsumers to see exactly where their products come from, from cradle to grave</div>
      
    </div>
    </div>
    <GrainyOverlay />
    </div>
  );
};

export default App;
