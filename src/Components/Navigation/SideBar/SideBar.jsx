import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import NavLink from '../NavLink/NavLink';

const SideBar = () => {
  return (
    <div className="h-screen hidden lg:block shadow-lg relative w-80">
      <div className="bg-white h-full dark:bg-gray-700">
        <div className="flex items-center justify-start pt-6 ml-8">
          <p className="font-bold dark:text-white text-xl">G.M.S</p>
        </div>
        <nav className="mt-6">
          <div>
            <NavLink name="Home" icon={faHome} active={true} />
            <NavLink name="Home" icon={faHome} active={false} />
            <NavLink name="Home" icon={faHome} active={false} />
            
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
