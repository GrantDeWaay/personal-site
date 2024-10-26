import React from 'react';
interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  icons?: string[];
  buttonLabel?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, text, icons, link, buttonLabel }) => {
  const openLink = function () {
    if(link){
      window.open(link, "_blank")
    }
  };
  return (
    <div className=" overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{title}</div>
        <p className="text-gray-700 text-base mb-2 text-md">{subtitle}</p>
        <p className="text-gray-700 text-base">{text}</p>
        {(buttonLabel && link) && 
      <button className="bg-blue-500 text-white font-bold mt-4 py-2 px-4 rounded" onClick={openLink}>{buttonLabel}</button>}
      </div>
      
      {icons && <div className="flex justify-left space-x-2 pb-4 px-6">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt={`icon-${index}`} className="w-6 h-6" />
        ))}
      </div>}
    </div>
  );
};

export default Card;
