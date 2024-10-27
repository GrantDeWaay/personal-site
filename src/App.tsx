import React from 'react';
import Link from './components/Link';
const App: React.FC = () => {
  return (
    <>
    
    <div className="max-w-6xl mx-auto grid grid-cols-12 mb-8 p-6 gap-6">
      
      {/* Top Links Section */}
      
      <div className="col-span-12 text-right text-gray-700 font-medium">
        <Link text="LinkedIn" url="https://www.linkedin.com/in/grant-dewaay/" />
        <span className="mx-4">|</span>
        <Link text="GitHub" url="https://github.com/GrantDeWaay" />
        <span className="mx-4">|</span>
        <Link text="Instagram" url="https://instagram.com/Grant.DeWaay" />
      </div>
      

      {/*Heading Section*/}
      <div className="col-span-12">
        <h1 className="text-7xl font-bold font-sans">Grant DeWaay</h1>
        <h1 className="text-7xl font-bold font-sans">Software Engineering</h1>
      </div>
      
      
      {/* <div className="col-span-6 row-span text-right text-gray-700 font-medium">
        <Link text="LinkedIn" url="https://www.linkedin.com/in/grant-dewaay/" />
        <br/>
        <Link text="GitHub" url="https://github.com/GrantDeWaay" />
        <br/>
        <Link text="Instagram" url="https://instagram.com/Grant.DeWaay" />
      </div> */}
      {/* About Me Section */}
      <div className="col-span-4 pt-6">
        <h3 className="text-2xl font-bold tracking-wide">About Me</h3>
      </div>
      <div className="col-span-8 pt-6 text-lg leading-relaxed text-gray-700">
        <p>
        Hi there! My name is Grant, I'm a passionate software engineering student at Iowa State University, also pursuing a secondary major in interdisciplinary design. Growing up in Des Moines, IA, I've been drawn to tech since I was a kid, always tinkering with computers and exploring what makes great software truly exceptional. I thrive on building efficient, well-designed programs, and I’m committed to using cutting-edge technology and design principles to create seamless, impactful experiences.
        </p>
        <p className="mt-4">
        My career interests are focused on distributed systems—I'm excited about the possibilities they unlock in scalability, reliability, and innovation. Beyond the code, you'll find me on the pickleball court, cheering on the Denver Nuggets (go Nuggets!), or hunting down rare Sega Dreamcast games to add to my collection.
        Let's connect—I'm always open to new ideas, collaborations, and, of course, a great pickleball game!
        </p>
      </div>

      {/* Work Experience Section */}
      <div className="col-span-4 pt-6">
        <h3 className="text-2xl col-span-4 font-bold tracking-wide">Work Experience</h3>
      </div>
      <div className="col-span-8 pt-6 text-xl leading-relaxed text-gray-700">
        <p><strong>Buildertrend</strong><br/></p>
        <p className="">
          Based in Omaha, Buildertrend is the largest developer of construction site management software.
          In my first summer at Buildertrend, I developed a semantic search prototype leading to the formation of the Silver Sky development team.
          During my second summer, I contributed to the RebateHawk project, showcasing my ability to innovate and improve software solutions.
        </p>
      </div>

      {/* Projects Section */}
      <div className="col-span-4 pt-6">
        <h3 className="text-2xl font-bold tracking-wide">Projects</h3>
      </div>
      <div className="col-span-8 pt-6 text-gray-700">
        <ul className="list-disc list-inside text-lg space-y-2">
          <a className='underline text-blue-500' href='https://devpost.com/software/harvard-burger'>Harvard Burger - HackHarvard 2024 | Funniest Hack Award </a><br/>
          <a className='underline text-blue-500' href='https://github.com/GrantDeWaay/DistributedSystemsFinalProject'>WebRTC Voice Chat Application [PRIVATE] </a><br/>
          <a className='underline text-blue-500' href='https://github.com/GrantDeWaay/GolangSupplyChain'>Spime: Transparent LCA for Consumer Products [PRIVATE]</a><br/>
          <a>AI Checkers Bot - UNAVAILABLE</a>
        </ul>
      </div>
      
    </div>
    </>
  );
};

export default App;
