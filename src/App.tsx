import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import GrainyOverlay from './components/GrainyOverlay';
import { LayoutContainer, LayoutContainer2, LayoutContainer3 } from './components/LayoutContainer';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Navbar2 from './components/Navbar2';
import NewCard from './components/NewCard';
import Footer from './components/Footer';
import CenteredVideo from './components/CenteredVideo';

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
        {/* Wrapping the NewCards with motion.div for sequential animation */}
          <div className='col-span-12 z-10 text-center text-faded-black font-sans text-4xl font-bold'>Projects</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Make it fade in when it enters the viewport
          transition={{ duration: 1, delay: 1 / 6 }} // No delay for the first card
          viewport={{ once: true }} // Trigger the animation only once
          className='md:col-span-4 col-span-12 z-10 flex md:mx-0'
        >

          <NewCard
            image={'./Checkers.png'}
            title={"Optimal Play AI Checkers Bot"}
            subtitle={'Implemented using Monte Carlo Search'}
            text={"I created an MCTS-based AI to analyze game states and suggest optimal moves, incorporating selection, expansion, simulation, and backpropagation. I also developed a GUI to display valid moves and provided real-time feedback, while testing AI performance on exploration constants."}
            link={'https://github.com/GrantDeWaay/CheckersBot'}
            buttonLabel={'GitHub'}
            color={"#000000"}
            imageOutline
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Make it fade in when it enters the viewport
          transition={{ duration: 1, delay: 2 / 6 }} // Adding a delay of 0.5s for the second card
          viewport={{ once: true }} // Trigger the animation only once
          className='md:col-span-4 col-span-12 z-10 flex'
        >

          <NewCard
            image={'./eco.png'}
            title={"Circular Track"}
            subtitle={'Circular Economy for Consumer Products'}
            text={"CircularTrack is a transparent logistics platform promoting circular economy practices by engaging consumers in recycling and material reuse. It tracks materials from production to recycling using RFID tags, helping companies monitor material usage and reduce raw material consumption."}
            link={'https://github.com/GrantDeWaay/CircularTrack'}
            color='#008000'
            buttonLabel={'GitHub'}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Make it fade in when it enters the viewport
          transition={{ duration: 1, delay: 1 / 2 }} // Adding a delay of 1s for the third card
          viewport={{ once: true }} // Trigger the animation only once
          className='md:col-span-4 col-span-12 z-10 md:mx-0 flex'
        >
          <NewCard
            image={'./HackHarvard.png'}
            title={"Harvard Burger"}
            subtitle={'Hack Harvard 2024 Award Winner'}
            text={"Harvard Burger is a digital drive-thru kiosk with a twist. It interprets the user's spoken order with smart semantic processing, converting their requests into a complete order from a preset menu. Winner of the Funniest Hack Award at HackHarvard 2024."}
            link={'https://github.com/GrantDeWaay/HackHarvard2024'}
            buttonLabel={'GitHub'}
            color={'#e20128'}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Make it fade in when it enters the viewport
          transition={{ duration: 1, delay: 4 / 6 }} // Adding a delay of 1s for the third card
          viewport={{ once: true }} // Trigger the animation only once
          className='md:col-span-4 col-span-12 z-10 flex'
        >
          <NewCard
            image={'./analytics.png'}
            title={"Grantalytics Server"}
            subtitle={'Visit Analytics for my Personal Site'}
            text={'Grantalytics Server is a simple data aggregation RESTful service built with Spring Boot that receives requests when users visit and subsequently closes my personal site This enables me to see what projects resonate the most with my audience, and what content I can improve on.'}
            link={'https://github.com/GrantDeWaay/GrantalyticsServer'}
            color='#A68B00'
            buttonLabel={'GitHub'}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} // Make it fade in when it enters the viewport
          transition={{ duration: 1, delay: 4 / 6 }} // Adding a delay of 1s for the third card
          viewport={{ once: true }} // Trigger the animation only once
          className='md:col-span-4 col-span-12 z-10 flex'
        >
          <NewCard
            image={'./website.png'}
            title={"This Personal Site"}
            subtitle={'A Portfolio to Showcase Myself'}
            text={'I drew inspiration from a range of designers to bring this portfolio website to life. For the layout, I referenced Grid Systems in Graphic Design by Josef Müller-Brockmann. I also applied elements of Dieter Rams\' 10 Principles of Good Design, reminding myself to keep it simple.'}
            link={'https://github.com/GrantDeWaay/personal-site'}
            color='#0095a3'
            buttonLabel={'GitHub'}
          />
        </motion.div>
      </LayoutContainer3>
      <Footer />
      <GrainyOverlay />
    </div>
  );
};

export default App;
