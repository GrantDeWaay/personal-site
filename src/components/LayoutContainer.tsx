import React, { PropsWithChildren } from 'react';

const LayoutContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-faded-back relative px-[10%] ">
      <div className=" mx-auto grid grid-cols-12 gap-x-4 gap-y-6 auto-rows-fixed ">
        {children}
      </div>
    </div>
  );
};




const LayoutContainer2: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="py-8">
      <div className="">
        {children}
      </div>
    </div>
  );
};


const LayoutContainer3: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-faded-black relative px-[10%]  ">
      <div className=" mx-auto grid grid-cols-12 gap-x-4 gap-y-6 auto-rows-fixed py-8">
        {children}
      </div>
    </div>
  );
};

export {LayoutContainer, LayoutContainer2, LayoutContainer3};