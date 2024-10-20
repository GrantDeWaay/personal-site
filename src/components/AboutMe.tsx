import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div className="flex justify-between items-start p-4"> {/* Change items-center to items-start */}
      <div className="text-left">
        <h1 className="text-xl font-bold">Your Text Here</h1>
        <p className="text-gray-600">
          My name is Grant DeWaay, I am a software engineer with a knack for
          creative problem-solving and building enterprise-grade applications.
        </p>
      </div>
      <img src="Insearchof.jpg" alt="Description" className="max-h-96 max-w-96 object-cover" />
    </div>
  );
};

export default AboutMe;
