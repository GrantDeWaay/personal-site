import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className='w-full  text-white p-4'>
      <div className="flex justify-around w-full max-w-4xl mx-auto">
        <button className="bg-gray-700 px-4 py-2 rounded">Home</button>
        <button className="bg-gray-700 px-4 py-2 rounded">About</button>
        <button className="bg-gray-700 px-4 py-2 rounded">Services</button>
        <button className="bg-gray-700 px-4 py-2 rounded">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
