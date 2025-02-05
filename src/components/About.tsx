import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => (

    <>
    <div className="grid lg:col-span-6 col-span-12 z-10 mr-8 mt-16 md:my-16 text-faded-black gap-6 ">

        {/* Text Section */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className=""
        >
            <h1 className="text-4xl font-bold mb-4 underline decoration-4 underline-offset-2 bg-swiss-red inline-grid decoration-swiss-red px-1">Hi, I'm Grant!</h1>
            <p className="text-lg mb-4">
                I'm a recent graduate of <span className="font-semibold underline decoration-2 underline-offset-2 decoration-swiss-red">Iowa State University</span>, 
                where I earned degrees in <span className="font-semibold underline decoration-2  underline-offset-2 decoration-swiss-red">Software Engineering and Interdisciplinary Design</span>. Growing up 
                in Des Moines, IA, I discovered a passion for technology 
                that drives me to create efficient, well-designed software. My career interests focus on 
                Artificial Intelligence and Enterprise Systems, inspired by its transformative 
                potential and ability to solve complex problems.
            </p>
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
            className="lg:col-span-6 col-span-12  md:my-16 mb-16 flex items-center justify-center z-[10000] "
        >
            <img src="Photo1.jpg" className="max-w-full max-h-full rounded-lg border-4  border-swiss-red  " alt="Image" />
        </motion.div>
    </>
);

export default About;
