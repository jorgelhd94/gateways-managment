import React from 'react';
import Image from 'next/image';

const EmptyList = () => {
  return (
    <div className="flex relative flex-col justify-center">
      <Image src="/assets/img/empty.svg" width={400} height={400} priority/>
    </div>
  );
};

export default EmptyList;
