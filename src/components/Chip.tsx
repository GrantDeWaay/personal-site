import React from 'react';
import '../App.css'

export type ChipProps = {
    text: string,
    type?: number
  };
  

const Chip: React.FC<ChipProps> = ({text, type}) => {
    if(type && type === 1){
        return (
            <div className='border-[.125rem] border-faded-black text-xs text-faded-black font-sans font-bold inline-block px-1 rounded-full'>{text}</div>
          );
    }
    else
    return (
        <div className='border-[.125rem] border-faded-black bg-faded-black text-xs text-faded-back font-sans font-bold inline-block px-1 rounded-full'>{text}</div>
      );
};

export default Chip;
