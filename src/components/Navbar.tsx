import React from 'react';
import Link from './Link';

const Navbar: React.FC = () => {
  return (
    <div className='flex flex-auto justify-between px-16 col-span-12'>
      <Link url="https://www.linkedin.com/in/grant-dewaay/" text='LinkedIn' disable/>
      <Link url="https://github.com/GrantDeWaay" text='GitHub' disable/>
      <Link url="https://www.instagram.com/Grant.DeWaay/" text='Instagram' disable/>
    </div>
  );
};

export default Navbar;
