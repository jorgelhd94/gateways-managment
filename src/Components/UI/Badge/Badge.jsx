import React from 'react';

const Badge = ({children}) => {
  return (
    <>
      <span className="px-1 bg-blue-500 text-white rounded-full">{children}</span>
    </>
  );
};


export default Badge;
