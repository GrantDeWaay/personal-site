import React from 'react';

const About: React.FC = () => (
    <>
    <div className="grid lg:col-span-6 col-span-12 z-10 mr-8 mt-16 md:my-16 text-faded-black gap-6 ">
        <div className="lg:col-span-6 text-sm col-span-12">
            <h1 className="text-4xl font-bold mb-4   decoration-swiss-red inline-grid">Hi, I'm Grant!</h1>
            <p className=" mb-4">
                I am a recent graduate of <span className="font-semibold underline decoration-2 underline-offset-2 decoration-swiss-red">Iowa State University</span>, 
                where I earned degrees in both <span className="font-semibold underline decoration-2  underline-offset-2 decoration-swiss-red">Software Engineering and Interdisciplinary Design</span>. I am currently searching for a full time position. My career interests focus on Large Scale Enterprise Systems, Robotics, and AI Engineering, inspired their ability to impact society and transform
                practically every industry.            </p>
                <p className=" mb-4">
                My work experience includes two internships at <span className="font-semibold underline decoration-2 underline-offset-2 decoration-swiss-red">Buildertrend</span>, one of the largest construction project management software developers. There, I grasped advanced Object-Oriented Programming fundamentals in <span className="font-semibold underline decoration-2 underline-offset-2 decoration-swiss-red"> C# and .NET Core</span> Core while building a semantic search prototype for the company's massive product catalog.
            </p>
            <p className=" mb-4">
            I am also passionate about sustainable engineering and the role technology plays in creating a more sustainable future, having taken multiple additional courses dedicated to the subject and building a SCM platform prototype called CircularTrack dedicated to the circular economy, winning $5,000 in a university pitch competition.
            </p>

            <p className=" mb-4">
                Aside from coding, some personal interests include playing pickleball, collecting retro Sega Dreamcast games, and studying modern and contemporary art.
            </p>
        </div>
    </div>

    <div className="lg:col-span-6 col-span-12  md:my-16 mb-16 flex items-center justify-center z-[10000] ">
        <div>
            <img src="Photo1.jpg" className="max-w-full max-h-full rounded-lg outline outline-4 outline-swiss-red  " alt="Image" />
        </div>
    </div>
    </>
);

export default About;
