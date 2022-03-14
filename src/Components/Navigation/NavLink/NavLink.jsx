import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavLink = (props) => {
  const defaultClass =
    'w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start';
  const activeClass = defaultClass + ' border-l-4 border-blue-500';
  
  return (
    <a className={props.active ? defaultClass : activeClass} href="#">
      <span className="text-left">
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <span className="mx-2 text-sm font-normal">{props.name}</span>
    </a>
  );
};

NavLink.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired
};

export default NavLink;
