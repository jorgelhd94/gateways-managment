import React from 'react';
import PropTypes from 'prop-types';
import ErrorStyle from '../ErrorMessage/ErrorMessage';

const InputForm = (props) => {
  return (
    <div className="mt-2 mb-6">
      <div className="flex flex-col relative ">
        {props.children}
      </div>

      <ErrorStyle>{props.error}</ErrorStyle>
    </div>
  );
};

InputForm.propTypes = {
  error: PropTypes.object.isRequired
};

export default InputForm;