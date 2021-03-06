import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const ButtonIcon = (props) => {
  const defaultClass =
    'py-2 px-4 flex justify-center items-center text-white w-max transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ';
  const styles = {
    primary: 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200',
    info: 'bg-blue-300 hover:bg-blue-500 focus:ring-blue-300 focus:ring-offset-blue-200',
    success: 'bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200',
    danger: 'bg-red-500 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200'
  };
  return (
    <button type="button" className={defaultClass + styles[props.type]} onClick={props.click}>
      {props.showIcon && (
        <FontAwesomeIcon
          icon={!props.loading ? props.icon : faSpinner}
          className={props.loading ? 'fa-spin' : ''}
        />
      )}
      {props.children && <span className="ml-2">{props.children}</span>}
    </button>
  );
};

ButtonIcon.propTypes = {
  type: PropTypes.oneOf(['primary', 'info', 'success', 'danger']),
  icon: PropTypes.object,
  showIcon: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  click: PropTypes.func,
  children: PropTypes.node
};

export default ButtonIcon;
