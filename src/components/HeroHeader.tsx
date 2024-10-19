import React from 'react';

interface HeroHeaderProps {
  message: string;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ message }) => {
  return (
    <>
    <header className='absolute inset-x-0 top-0 z-50'>
    <div className="text-3xl font-bold underline">{message}</div>
    </header>

    </>
  )
};

export default HeroHeader;
