import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
    <div className="flex flex-col m-4 px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
