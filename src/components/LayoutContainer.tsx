import React, { PropsWithChildren } from 'react';

const LayoutContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-swiss-gray relative">
      <div className="lg:max-w-[50vw] mx-auto grid grid-cols-12 p-6 gap-4 auto-rows-fixed">
        {children}
      </div>
    </div>
  );
};

export default LayoutContainer;
