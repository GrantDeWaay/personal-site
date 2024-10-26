import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import SwissCard from './components/SwissCard';
import Link from './components/Link';

function App() {
  return (
    <div className='mx-auto w-full'>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        
        <div className="p-4 col-span-2" >
          <Link text='LinkedIn' url='https://www.linkedin.com/in/grant-dewaay/'/><br/>
          <Link text='GitHub' url='https://github.com/GrantDeWaay'/>
        </div>
        
        <div className=" p-4 col-span-2 border-t-2 border-black">
          <h1 className='font-sans font-bold text-7xl'>
            Grant DeWaay
          </h1>
        </div>
        
        <div className="px-4 col-span-2">
          <h2 className='font-sans font-bold text-xl mx-auto'>
            Software Engineering Graduate from Iowa State University
          </h2>
        </div>
        
        <div className="font-sans font-bold text-5xl p-4">
          <h3 className="font-bold">About Me</h3>
        </div>
        
        <div className="bg-blue-500 p-4">
          Hi there! I'm a passionate software engineering student at Iowa State University, also pursuing a secondary major in interdisciplinary design. <br/><br/>
          Growing up in Des Moines, IA, I've been drawn to tech since I was a kid, always tinkering with computers and exploring what makes great software truly exceptional. I thrive on building efficient, well-designed programs, and I’m committed to using cutting-edge technology and design principles to create seamless, impactful experiences. <br/><br/>
          My career interests are focused on distributed systems—I'm excited about the possibilities they unlock in scalability, reliability, and innovation. Beyond the code, you'll find me on the pickleball court, cheering on the Denver Nuggets (go Nuggets!), or hunting down rare Sega Dreamcast games to add to my collection.
          Let's connect—I'm always open to new ideas, collaborations, and, of course, a great pickleball game!
        </div>
        
        
        <div className=" font-sans font-bold text-5xl p-4">
          Work Experience
        </div>
        <div className=" p-4">
          Buildertrend <br/> <br/>
          Based in Omaha, Buildertrend is the largest developer of construction site management software. In my first summer at Buildertrend, I developed a successful semantic search prototype that led to the formation of the Silver Sky development team. During my second summer, I worked on team Silver Sky and contributed to the RebateHawk project, which leverages AI to streamline the rebate redemption process, showcasing my ability to innovate and improve software solutions in a collaborative environment.
        </div>

        <div className="font-sans font-bold text-5xl p-4  ">
          Projects
        </div>
        <div className="bg-blue-500 p-4">
          <SwissCard title={'Title'} subtitle={'Subtitle'} content={'Content'} footer={'Footer'}></SwissCard>
        </div>
        
      </div>
    </div>
  );
}

export default App;

// <div className="h-[20px] w-[300px] my-4 mx-[-16px] bg-red-600"></div>
