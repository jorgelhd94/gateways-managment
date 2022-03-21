import React from 'react';
import PropTypes from 'prop-types';

const THead = ({ children }) => {
  return (
    <>
      <th
        scope="col"
        // eslint-disable-next-line prettier/prettier
        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
      >
        {children}
      </th>
    </>
  );
};

THead.propTypes = {
  children: PropTypes.node
};

export default THead;
