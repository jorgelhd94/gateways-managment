import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = (props) => {
  return <div className="text-left text-red-500">{props.children}</div>;
};

ErrorMessage.propTypes = {
  children: PropTypes.node
};

export default ErrorMessage;
