import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconFontAwesome = (props) => {
  const iconProp = props.type + ' ' + props.icon;
  return <FontAwesomeIcon icon={iconProp} />;
};

IconFontAwesome.propTypes = {
    type: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default IconFontAwesome;
