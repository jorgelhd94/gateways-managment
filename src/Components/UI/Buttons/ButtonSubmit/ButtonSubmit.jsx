import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ButtonSubmit = (props) => {
  return (
    <button
      className="inline-block w-max rounded-full disabled:cursor-not-allowed font-medium border border-solid cursor-pointer text-center text-base py-2 px-4 text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600"
      type="submit"
      disabled={props.isLoading}>
      {props.isLoading ? <FontAwesomeIcon icon={faSpinner} className="fa-spin" /> : props.children}
    </button>
  );
};

ButtonSubmit.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default ButtonSubmit;
