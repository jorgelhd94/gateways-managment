import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ImageGatewayDisplay = (props) => {
  return (
    <div className="flex flex-col justify-center items-center relative">
      {!props.url ? (
        <Image src="/assets/img/nophoto.svg" width={130} height={130} />
      ) : (
        <div className='flex-auto relative w-40 h-32'>
          <Image src={props.url} className='rounded cursor-pointer' placeholder="blurDataURL" layout="fill" priority />
        </div>
      )}
    </div>
  );
};

ImageGatewayDisplay.propTypes = {
  url: PropTypes.string.isRequired
};

export default ImageGatewayDisplay;
