import React from 'react';

const About: React.FC = () => (
    <>
        <div className="col-span-12 ">
            <h3 className="text-2xl font-bold tracking-wide text-faded-black">
                About Me
            </h3>
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-10 text-sm leading-relaxed text-faded-black border-l-2 pl-3 border-swiss-red transition-all duration-100 ease-linear hover:border-l-4">
            <p>
                <strong>Hi, I'm Grant!</strong>
            </p>
            <p className="">
                I am a software engineering student at Iowa State University with a secondary major in interdisciplinary design. I grew up in Des Moines, IA, where I developed a passion for tech, and now I focus on creating efficient, well-designed software. My career interests lie in distributed systems for their scalability and innovation potential.
            </p>
            <p className="mt-4">
                Outside of coding, I'm either on the pickleball court, cheering on the Denver Nuggets, or collecting rare Sega Dreamcast games. Let's connect—I'm always up for new ideas, collaborations, or a great pickleball game!
            </p>
        </div>
        <div className="col-span-1"></div>
    </>
);

export default About;
