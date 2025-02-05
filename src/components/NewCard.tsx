import React from 'react';
import { useMyContext } from './GrantalyticsContext';

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
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, text, icons, link, buttonLabel, color = "", dark, imageOutline = false }) => {
  const {addInteraction} = useMyContext();
  const openLink = () => {
    addInteraction(`visited ${title}`);
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <div 
      className="overflow-hidden shadow-lg p-4 flex flex-col z-10 rounded-xl border-4 border-swiss-blue" 
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className={`text-xl font-bold ${dark ? 'text-faded-back' : 'text-faded-black'}`}>{title}</h2>
          <h3 className={` italic ${dark ? 'text-faded-back' : 'text-faded-black'}`}>{subtitle}</h3>
        </div>
        
        <img 
          className={`w-16 h-16 object-cover rounded-md ${imageOutline ? 'border-2 border-white' : ''}`} 
          src={image} 
          alt={title} 
        />
      </div>

      <p className={`flex-grow ${dark ? 'text-faded-back' : 'text-faded-black'}`}>{text}</p>

      <button
        onClick={openLink}
        className={`mt-4 ${dark ? 'bg-faded-back text-faded-black' : 'bg-faded-black text-faded-back'} font-semibold py-2 px-4 rounded`}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

export default Card;
