import React from 'react';
import Navbar from './Navbar';

const Header: React.FC = () => (
    <>
      <div className=" col-span-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-3 text-faded-black">
            Grant DeWaay
          </h1>
          <p className="text-xl font-medium text-faded-black">
            Software Engineer
          </p>
          <div className='flex justify-center gap-4 mt-4'>
            <div className="w-[20px] h-[20px] bg-[#DE3D83] rounded-full"></div>
            <div className="w-[20px] h-[20px] bg-[#00B8B8] rounded-full"></div>
            <div className="w-[20px] h-[20px] bg-[#E4BD0B] rounded-full"></div>
          </div>
        </div>
    </>

);

export default Header;
