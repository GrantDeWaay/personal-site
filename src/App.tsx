import React from 'react';
import GrainyOverlay from './components/GrainyOverlay';
import { LayoutContainer, LayoutContainer2, LayoutContainer3 } from './components/LayoutContainer';
import Header from './components/Header';
import About from './components/About';
import NewCard from './components/NewCard';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <LayoutContainer2>
        <Header />
      </LayoutContainer2>

      <LayoutContainer>
        <About />
      </LayoutContainer>
      <LayoutContainer3>
        <div className='col-span-12 z-10 text-center text-faded-back font-sans text-5xl font-bold underline underline-offset-2 decoration-4 decoration-swiss-blue'>Projects</div>
        
        <div className='lg:col-span-4 md:col-span-6 col-span-12 z-10 flex md:mx-0'>
          <NewCard
            image={'./Checkers.png'}
            title={'Optimal Play AI Checkers Bot'}
            subtitle={'Implemented using Monte Carlo Search'}
            text={'I created an MCTS-based AI to analyze game states and suggest optimal moves, incorporating selection, expansion, simulation, and backpropagation. I also developed a GUI to display valid moves and provided real-time feedback, while testing AI performance on exploration constants.'}
            link={'https://github.com/GrantDeWaay/CheckersBot'}
            buttonLabel={'GitHub'}
            color={'#292928'}
            imageOutline
            chips={[
              { text: 'Java' , type:1},
            ]}
          />
        </div>
        
        <div className='lg:col-span-4 md:col-span-6 col-span-12 z-10 flex'>
          <NewCard
            image={'./robot.png'}
            title={'Battlefield Scanning Robot'}
            subtitle={'Hazard Detection Embedded C Robot '}
            text={'This robot that utilizes three different memory mapped sensors to scan a battlefield for holes and obstacles. Communicates it\'s findings to a desktop command center via serial connection to display an interactive map built with Python.'}
            link={'https://github.com/GrantDeWaay/BattlefieldScanBot'}
            color='#292928'
            buttonLabel={'GitHub'}
            chips={[
              { text: 'Embedded C', type: 1},
              { text: 'Python', type: 1 },
            ]}
          />
        </div>



        

        <div className='lg:col-span-4 md:col-span-6 col-span-12 z-10 flex'>
          <NewCard
            image={'./eco.png'}
            title={'CircularTrack'}
            subtitle={'Circular Economy for Consumer Products'}
            text={'CircularTrack is a transparent logistics platform promoting circular economy practices by engaging consumers in recycling and material reuse. It tracks materials from production to recycling using NFC tags, helping companies monitor material usage and reduce raw material consumption.'}
            link={'https://github.com/GrantDeWaay/CircularTrack'}
            color='#292928'
            buttonLabel={'GitHub'}
            buttonLabel2='Design Doc'
            link2='https://docs.google.com/document/d/1kReilNLOIi2Ksfg1FNLXpN8A0Ao9hnRkQ1Z1FBXZ0DY/edit?usp=sharing'
            chips={[
              { text: 'Java', type: 1 },
              { text: 'Spring Boot',  type: 1 },
              { text: 'TypeScript',  type: 1},
              { text: 'React', type: 1},
            ]}
          />
        </div>

        <div className='lg:col-span-4 md:col-span-6 col-span-12 z-10 flex'>
          <NewCard
            image={'./FSharp.png'}
            title={'LeetCode Solutions Written in F#'}
            subtitle={'.NET Functional Programming Practice'}
            text={'To learn more about the .NET ecosystem, I am learning functional programming and F# by solving LeetCode problems exclusively with the programming language.'}
            link={'https://github.com/GrantDeWaay/LeetCodeFSharpSolutions'}
            color='#292928'
            buttonLabel={'GitHub'}
            chips={[
              { text: 'F#', type: 1},
            ]}
          />
        </div>

        <div className='lg:col-span-4 md:col-span-6 col-span-12 z-10 md:mx-0 flex'>
          <NewCard
            image={'./HackHarvard.png'}
            title={'Harvard Burger'}
            subtitle={'HackHarvard 2024 Award Winner'}
            text={'Harvard Burger is a digital drive-thru kiosk with a twist. It interprets the user\'s spoken order with smart semantic processing, converting their requests into a complete order from a preset menu. Winner of the Funniest Hack Award at HackHarvard 2024.'}
            link={'https://github.com/GrantDeWaay/HackHarvard2024'}
            buttonLabel={'GitHub'}
            color={'#292928'}
            buttonLabel2='Devpost'
            link2='https://devpost.com/software/harvard-burger'
            chips={[
              { text: 'Python', type: 1},
              { text: 'TypeScript', type: 1 },
              { text: 'Flask', type: 1 },
              { text: 'React', type: 1 },
            ]}
          />
        </div>

        <div className='lg:col-span-4 md:col-span-6 col-span-12 z-10 flex'>
          <NewCard
            image={'./analytics.png'}
            title={'Grantalytics Server'}
            subtitle={'Visit Analytics for my Personal Site'}
            text={'Grantalytics Server is a simple data aggregation RESTful service built with Spring Boot that receives requests when users visit and subsequently closes my personal site This enables me to see what projects resonate the most with my audience, and what content I can improve on.'}
            link={'https://github.com/GrantDeWaay/GrantalyticsServer'}
            color='#292928'
            buttonLabel={'GitHub'}
            chips={[
              { text: 'Java', type: 1},
              { text: 'Spring Boot', type: 1 },
            ]}
          />
        </div>



      </LayoutContainer3>
      <Footer />
      <GrainyOverlay />
    </div>
  );
};

export default App;