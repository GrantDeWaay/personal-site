import React from 'react';
import CenteredVideo from './CenteredVideo';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import ResumeButton from './ResumeButton';
import { LayoutContainer3 } from './LayoutContainer';

const Header: React.FC = () => (
  <div>
    <LayoutContainer3>
    <div className='col-span-12 lg:col-span-6 text-center flex-1 md:text-left '>
      <div className='flex flex-col justify-center h-full'>
      <h1 className="lg:text-7xl text-5xl leading-tight font-bold text-faded-back">
        Grant DeWaay
      </h1>
      <p className="text-3xl pb-3 text-faded-back  decoration-swiss-red  underline-offset-2">
        Software Engineer
      </p>

      <div className='flex justify-center md:justify-start gap-4'>
      <ResumeButton/>
      <GitHubIcon/>
      <LinkedInIcon/>
      </div>
      </div>

      
      </div>
      <div className='col-span-12 lg:col-span-6 z-[100000]'>
      <CenteredVideo/>
      </div>
      
    </LayoutContainer3>
  </div>
);

export default Header;
