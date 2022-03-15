import React, { useContext } from 'react';
import NavLink from '../NavLink/NavLink';
import { faHome, faServer, faLaptop } from '@fortawesome/free-solid-svg-icons';


const SideBar = () => {
  return (
    <div className='h-screen hidden lg:block ml-0 shadow-lg absolute lg:relative transition delay-500 w-80 z-50 '>
      <div className="bg-white h-full dark:bg-gray-700">
        <div className="flex items-start justify-start pt-6 mx-8">
          <p className="font-bold dark:text-white text-xl">G.M.S</p>
        </div>
        <nav className="mt-6">
          <div>
            <NavLink name="Home" href="/" icon={faHome} />
            <NavLink name="Gateways" href="/gateways" icon={faServer} />
            <NavLink name="Devices" href="/devices" icon={faLaptop} />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
