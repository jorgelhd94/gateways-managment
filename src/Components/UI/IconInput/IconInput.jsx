import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorStyle from '../ErrorMessage/ErrorMessage';

const IconInput = (props) => {
  return (
    <div className="my-6">
      <div className="flex relative ">
        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
          <FontAwesomeIcon icon={props.icon} />
        </span>

        {props.children}
      </div>

      <ErrorStyle>{props.error}</ErrorStyle>
    </div>
  );
};

IconInput.propTypes = {
  icon: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired
};

export default IconInput;
