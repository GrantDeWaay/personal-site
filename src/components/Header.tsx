import React from 'react';
import Navbar from './Navbar';
import CenteredVideo from './CenteredVideo';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import ResumeButton from './ResumeButton';

const Header: React.FC = () => (
  <div>
    <div className="flex md:flex-row flex-col items-center justify-center md:px-[10%] px-[5%] gap-4 md:gap-0 ">
    <div className='text-center flex-1 md:text-left'>
      <h1 className="lg:text-7xl text-5xl leading-tight font-bold text-faded-back">
        Grant DeWaay
      </h1>
      <div className='flex'>
      <p className="text-3xl pb-3 text-faded-back  decoration-swiss-red  underline-offset-2">
        Software Engineer
      </p>
      {/* <div className='bg-swiss-red inline-block rounded-full w-[1.875rem] h-[1.875rem] mt-[0.25rem] ml-[1rem]'/>
      <div className='bg-swiss-blue inline-block rounded-full w-[1.875rem] h-[1.875rem] mt-[0.25rem] ml-[.5rem]'/>
      <div className='bg-swiss-yellow inline-block rounded-full w-[1.875rem] h-[1.875rem] mt-[0.25rem] ml-[.5rem]'/> */}
      </div>

      <div className='flex justify-center md:justify-start gap-4'>
      <ResumeButton/>
      <GitHubIcon/>
      <LinkedInIcon/>
      </div>
      
      </div>
      <div>
        
      </div>
      <CenteredVideo/>
      
    </div>
  </div>
);

export default Header;
