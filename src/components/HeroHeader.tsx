import React from 'react';

interface HeroHeaderProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl text-white mb-6">{subtitle}</p>}
        <button
          onClick={onButtonClick}
          className="px-6 py-3 text-lg bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-blue-50 transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HeroHeader;
