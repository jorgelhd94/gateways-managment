import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

const ButtonAuth = (props) => {
  return (
    <button
      className="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-blue-400 border-blue-400 hover:bg-blue-600 hover:border-blue-600 w-full"
      type={props.type}
      // eslint-disable-next-line prettier/prettier
      disabled={props.isLoading}
    >
      {props.isLoading && <FontAwesomeIcon icon={faCircleNotch} className="mr-2 fa-spin" />}
      {props.children}
    </button>
  );
};

ButtonAuth.propTypes = {
  type: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node
};

export default ButtonAuth;
