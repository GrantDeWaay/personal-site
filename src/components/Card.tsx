import React from 'react';
interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  icons: string[];
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, text, icons }) => {
  return (
    <div className="transition ease-in-out delay-10 max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl">{title}</div>
        <p className="text-gray-700 text-base mb-2 text-md">{subtitle}</p>
        <p className="text-gray-700 text-base">{text}</p>
      </div>
      <div className="flex justify-left space-x-2 pb-4 px-6">
        {icons.map((icon, index) => (
          <img key={index} src={icon} alt={`icon-${index}`} className="w-6 h-6" />
        ))}
      </div>
    </div>
  );
};

export default Card;
