import React from 'react';
import PropTypes from 'prop-types';

const TD = ({ children }) => {
  return (
    <>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div className="flex items-center">
          <p className="text-gray-900 whitespace-no-wrap">{children}</p>
        </div>
      </td>
    </>
  );
};

TD.propTypes = {
  children: PropTypes.node
};

export default TD;
