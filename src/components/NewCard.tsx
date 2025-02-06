import React from 'react';
import { useMyContext } from './GrantalyticsContext';
import ChipSet, { ChipSetProps } from './ChipSet';
import { ChipProps } from './Chip';

interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  icons?: string[];
  buttonLabel: string;
  link: string;
  color?: string;
  dark?: boolean;
  imageOutline?: boolean;
  buttonLabel2?: string;
  link2?: string;
  chips: ChipProps[];
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, text, icons, link, buttonLabel, color = "", dark, imageOutline = false, buttonLabel2, link2, chips }) => {
  const {addInteraction} = useMyContext();
  const openLink = () => {
    addInteraction(`visited ${title}`);
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div 
      className="overflow-hidden p-4 flex flex-col z-10 rounded-xl border-4 border-swiss-blue" 
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-between ">
        <div>
          <h2 className={`lg:text-lg text-lg font-bold ${dark ? 'text-faded-back' : 'text-faded-black'}`}>{title}</h2>
          <h3 className={`lg:text-md text-xs italic ${dark ? 'text-faded-back' : 'text-faded-black'}`}>{subtitle}</h3>
          
        </div>
        
        <img 
          className={` w-12 h-12 object-cover rounded-md ${imageOutline ? 'border-2 border-faded-black' : ''}`} 
          src={image} 
          alt={title} 
        />
      </div>
      <ChipSet items={chips} />

      <p className={`flex-grow mt-4 text-sm ${dark ? 'text-faded-back' : 'text-faded-black'}`}>{text}</p>

      {(!buttonLabel2 || !link2) && (      <button
        onClick={openLink}
        className={`mt-8 ${dark ? 'bg-faded-back text-faded-black' : 'bg-faded-black text-faded-back'} font-semibold py-2 px-4 rounded`}
      >
        {buttonLabel}
      </button>)}


      {buttonLabel2 && link2 && (

        <div className='flex flex-row gap-x-2'>
              <button
        onClick={openLink}
        className={`mt-4 flex-1 ${dark ? 'bg-faded-back text-faded-black' : 'bg-faded-black text-faded-back'} font-semibold py-2 px-4 rounded`}
      >
        {buttonLabel}
      </button>

      <button
          onClick={() => {
            addInteraction(`visited ${title} ${buttonLabel2}`);
            window.open(link2, "_blank");
          }}
          className={`mt-4 flex-1 ${dark ? 'bg-faded-back text-faded-black' : 'bg-faded-black text-faded-back'} font-semibold py-2 px-4 rounded`}
        >
          {buttonLabel2}
        </button>
        </div>


      )}
    </div>
  );
};

export default Card;
