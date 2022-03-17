import React from 'react';

const Badge = ({children}) => {
  return (
    <>
      <span className="px-2 py-1 bg-blue-500 text-white rounded-full">{children}</span>
    </>
  );
};


export default Badge;
