import React from 'react';
import PropTypes from 'prop-types';
import ErrorStyle from '../ErrorMessage/ErrorMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const InputForm = (props) => {
  return (
    <div className="mt-2 mb-6">
      <div className="flex relative ">
        <div className="flex flex-col relative ">{props.children}</div>
        
        {props.isValidating && (
          <div className='absolute top-2 right-2 text-blue-600'>
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
          </div>
        )}
      </div>

      <ErrorStyle>{props.error}</ErrorStyle>
    </div>
  );
};

InputForm.propTypes = {
  error: PropTypes.object.isRequired,
  isValidating: PropTypes.bool
};

export default InputForm;
