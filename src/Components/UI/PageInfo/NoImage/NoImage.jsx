import React from 'react';
import Image from 'next/image';

const FetchError = () => {
  return (
    <div className="flex relative flex-col justify-center">
      <Image src="/assets/img/nophoto.svg" width={130} height={130}/>
    </div>
  );
};

export default FetchError;
