import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ children, type }) => {
  const styles = {
    primary: 'bg-blue-500',
    success: 'bg-green-500',
    danger: 'bg-red-500',
    sad: 'bg-gray-500'
  };
  const defaultClass = 'px-2 py-1 text-white rounded-full ';
  const typeClass = type ? defaultClass + styles[type] : defaultClass + styles['primary'];

  return (
    <>
      <span className={typeClass}>{children}</span>
    </>
  );
};

Badge.propTypes = {
  type: PropTypes.oneOf(['primary', 'success', 'danger', 'sad'])
};

export default Badge;
