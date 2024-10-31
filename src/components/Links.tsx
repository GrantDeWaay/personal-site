import React from 'react';
import Link from './Link';

const Links: React.FC = () => (
  <>
    <div className="col-span-12">
      <h3 className="text-2xl font-bold tracking-wide text-faded-black">
        Links
      </h3>
    </div>
    <div className="col-span-1"></div>
    <div className="col-span-10 text-sm leading-relaxed text-faded-black border-l-2 pl-3 border-faded-black transition-all duration-200 ease-linear hover:border-l-4">
    <Link url="https://www.linkedin.com/in/grant-dewaay/" text='LinkedIn'/> <br/>
      <Link url="https://github.com/GrantDeWaay" text='GitHub'/> <br/>
      <Link url="https://www.instagram.com/Grant.DeWaay/" text='Instagram'/> <br/>
    </div>
    <div className="col-span-1"></div>
  </>
);

export default Links;
