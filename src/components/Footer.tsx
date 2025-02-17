import React from 'react';

const Footer: React.FC = () => {
    var year = new Date().getFullYear()
    return (
        <footer
            className="flex justify-center items-center p-4 col-span-12 bg-faded-back"
        >
            <div className="text-faded-black font-bold text-center z-10">
                <p>© {year} Grant DeWaay. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
