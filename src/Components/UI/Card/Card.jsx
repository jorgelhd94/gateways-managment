import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      {children}
    </div>
  );
};

export default Card;
