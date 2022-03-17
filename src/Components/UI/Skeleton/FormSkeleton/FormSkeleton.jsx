import React from 'react';

const FormSkeleton = () => {
  return (
    <div className="bg-white rounded w-full mx-auto rounded-2xl mt-8">
      <div className="">
        <div className="grid grid-cols-3 gap-4 mt-2">
          <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-16 bg-gray-200 rounded animate-pulse"></div>
          </div>
      </div>
    </div>
  );
};

export default FormSkeleton;
