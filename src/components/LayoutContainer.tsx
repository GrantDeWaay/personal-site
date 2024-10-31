import React, { PropsWithChildren } from 'react';

const LayoutContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-swiss-gray relative">
      <div className="lg:max-w-[50vw] mx-auto grid grid-cols-12 p-6 gap-x-4 gap-y-6 auto-rows-fixed">
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
