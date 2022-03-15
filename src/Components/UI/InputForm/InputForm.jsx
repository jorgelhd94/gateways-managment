import React from 'react';
import PropTypes from 'prop-types';
import ErrorStyle from '../ErrorMessage/ErrorMessage';

const InputForm = (props) => {
  return (
    <div className="my-6">
      <div className="flex relative ">
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