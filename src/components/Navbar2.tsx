import React, { useEffect, useState } from 'react';

const Navbar2: React.FC = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Current scroll position
            const documentHeight = document.body.scrollHeight - window.innerHeight; // Total scrollable height
            const scrolledPercentage = (scrollPosition / documentHeight) * 100;
            setScrollWidth(scrolledPercentage);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className=" w-full">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="flex justify-center gap-x-16 py-4">
                        <a href="#about" className="text-gray-700 text-xl hover:text-gray-900">About</a>
                        <a href="#projects" className="text-gray-700 text-xl hover:text-gray-900">Projects</a>
                        <a href="#contact" className="text-gray-700 text-xl hover:text-gray-900">Contact</a>
                    </div>
                </div>
                {/* Scrolling progress bar */}
                {/* <div    
                    className="h-2 z-10 absolute right-0 bg-swiss-gray"
                    style={{
                        width: `${100 - scrollWidth}%`,
                    }}
                ></div>
                <div
                    className="h-2 z-0 fixed left-0"
                    style={{
                        width: `100%`,
                        background: 'linear-gradient(40deg, #de3d83, #e4bd0b, #00b8b8)',
                    }}
                ></div> */}
            </nav>
        </>
    );
};

export default Navbar2;
