import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const ButtonGoogle = (props) => {
  const isLogin = props.method === 'login' ? true : false;
  return (
    <button className="flex items-center px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
      <FontAwesomeIcon icon={faGoogle} className="mr-4" />
      {isLogin ? 'Sign in with Google' : 'Sign Up with Google'}
    </button>
  );
};

ButtonGoogle.propTypes = {
  method: PropTypes.oneOf(['login', 'register'])
};

export default ButtonGoogle;
