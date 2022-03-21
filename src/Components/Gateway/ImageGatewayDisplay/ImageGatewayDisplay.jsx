import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ImageGatewayDisplay = (props) => {
  return (
    <div className="flex relative flex-col justify-center">
      {!props.url ? (
        <Image src="/assets/img/nophoto.svg" width={130} height={130} />
      ) : (
        <Image src={props.url} width={130} height={130}/>
      )}
    </div>
  );
};

ImageGatewayDisplay.propTypes = {
  url: PropTypes.string.isRequired
};

export default ImageGatewayDisplay;
