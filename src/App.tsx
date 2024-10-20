import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroHeader from './components/HeroHeader';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Card from './components/Card';

function App() {
  const icons = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg', 

  ];
  return (
    <>
        <Navbar/>
        <HeroHeader title='Grant DeWaay' buttonText='lol'></HeroHeader>

        <h1 className='text-3xl pt-10 px-10 font-bold'>Projects</h1>
        <div className='p-10 flex gap-8'>
          
        <Card
          image="6S1A2952.jpg"
          title="Harvard Burger"
          subtitle="HackHarvard 2024 Submission"
          text="This is some descriptive text about the card content."
          icons={icons}
        />
                <Card
          image="6S1A2952.jpg"
          title="Harvard Burger"
          subtitle="HackHarvard 2024 Submission"
          text="This is some descriptive text about the card content."
          icons={icons}
        />
        <Card
          image="6S1A2952.jpg"
          title="Harvard Burger"
          subtitle="HackHarvard 2024 Submission"
          text="This is some descriptive text about the card content."
          icons={icons}
        />
        <Card
          image="6S1A2952.jpg"
          title="Harvard Burger"
          subtitle="HackHarvard 2024 Submission"
          text="This is some descriptive text about the card content."
          icons={icons}
        />
        </div>

        <AboutMe/>

        <h2>Footer</h2>
        
    </>

  );
}

export default App;
