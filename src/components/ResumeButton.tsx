import React from 'react';
import '../App.css'
import { useMyContext } from './GrantalyticsContext';
const ResumeButton: React.FC = () => {
    const {addInteraction} = useMyContext();
    const openLink = () => {
        addInteraction(`visited resume`);
        window.open("https://grantdewaay.com/resume.pdf", "_blank");
      };
    return (
        <button onClick={openLink} className='border-[2px] border-faded-back text-s text-faded-back font-sans font-bold inline-block px-2 hover:bg-faded-back hover:text-faded-black rounded-full'>Resume</button>

    );
};

export default ResumeButton;
