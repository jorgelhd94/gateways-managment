import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonIcon = (props) => {
  const defaultClass =
    'py-2 px-4 flex justify-center items-center text-white w-max transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ';
  const styles = {
    success: 'bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200',
    danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200',
  };
  return (
    <button type="button" className={defaultClass + styles[props.type]}>
      {props.showIcon && <FontAwesomeIcon icon={props.icon} className="mr-2" />}

      {props.text}
    </button>
  );
};

ButtonIcon.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['danger']),
  icon: PropTypes.object,
  showIcon: PropTypes.bool.isRequired
};

export default ButtonIcon;
