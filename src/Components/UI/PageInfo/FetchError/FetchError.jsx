import React from 'react';
import Image from 'next/image';

const FetchError = () => {
  return (
    <div className="flex relative flex-col justify-center">
      <Image src="/assets/img/fetchError.svg" width={400} height={400} />
      <p className='w-full text-center text-2xl absolute bottom-6'>Sorry!! An unexpected error has occurred</p>
    </div>
  );
};

export default FetchError;
