import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => (

    <>
    <div className="grid md:col-span-6 col-span-12 z-10 mr-8 mt-16 md:my-16 text-faded-black gap-6 ">
        {/* Text Section */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className=""
        >
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Grant!</h1>
            <p className="text-lg mb-4">
                I'm a recent graduate of <span className="font-semibold underline decoration-2 underline-offset-2 decoration-swiss-red">Iowa State University</span>, 
                where I earned degrees in <span className="font-semibold underline decoration-2 underline-offset-2 decoration-swiss-red">Software Engineering and Interdisciplinary Design</span>. Growing up 
                in <span className="font-semibold">Des Moines, IA</span>, I discovered a passion for technology 
                that drives me to create efficient, well-designed software. My career interests focus on 
                <span className="font-semibold"> Artificial Intelligence and Enterprise Systems</span>, inspired by its transformative 
                potential and ability to solve complex problems.
            </p>
            <p className="text-lg mb-4">When I'm not coding, you'll find me:</p>
            <ul className="list-none space-y-2 mb-4">
                <li>🎾 <span className="font-semibold">Competing on the pickleball court</span></li>
                <li>🏀 <span className="font-semibold">Cheering on the Denver Nuggets</span></li>
                <li>🎮 <span className="font-semibold">Hunting for rare Sega Dreamcast games</span></li>
            </ul>
            <p className="text-lg">
                I'd love to connect! Whether you have a new idea, want to collaborate, or are just up for a great pickleball match, feel free to reach out.
            </p>
        </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="md:col-span-6 col-span-12  md:my-16 mb-16 flex items-center justify-center z-[10000] "
        >
            <img src="Photo1.jpg" className="max-w-full max-h-full rounded-lg border-8 rotate-2" alt="Image" />
        </motion.div>
    </>
);

export default About;
