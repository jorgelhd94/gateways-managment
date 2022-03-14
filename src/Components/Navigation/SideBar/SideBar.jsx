import React from 'react';
import PropTypes from 'prop-types';
import { faHome, faServer, faLaptop, faClose } from '@fortawesome/free-solid-svg-icons';
import NavLink from '../NavLink/NavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = (props) => {
  const defaultStyle = 'h-screen lg:block shadow-lg absolute lg:relative w-80 z-50 ';
  const hidden = !props.open ? 'hidden' : '';
  const style = defaultStyle + ' ' + hidden;

  return (
    <div className={style}>
      <div className="bg-white h-full dark:bg-gray-700">
        <div className="flex items-start justify-between pt-6 mx-8">
          <p className="font-bold dark:text-white text-xl">G.M.S</p>
          <button className='flex px-2 py-1 items-center rounded-xl text-white bg-blue-400 shadow text-md'>
            <FontAwesomeIcon icon={faClose} />
          </button>
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

SideBar.propTypes = {
  open: PropTypes.bool.isRequired
};

export default SideBar;
