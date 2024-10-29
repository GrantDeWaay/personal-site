import React from 'react';
import '../App.css'
const ExternalArrow: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 3a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 11-2 0V5.414l-9.293 9.293a1 1 0 01-1.414-1.414L17.586 4H15a1 1 0 01-1-1z" />
                <path d="M5 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-4a1 1 0 10-2 0v4a1 1 0 01-1 1H5a1 1 0 01-1-1V6a1 1 0 011-1h4a1 1 0 100-2H5z" />
              </svg>
  );
};

export default ExternalArrow;
