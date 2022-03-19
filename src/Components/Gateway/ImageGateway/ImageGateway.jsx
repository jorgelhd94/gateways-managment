import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import NoImage from '../../UI/PageInfo/NoImage/NoImage';

import ButtonIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const ImageGateway = (props) => {
  const refFile = useRef(null);

  const clickInput = () => {
      refFile.current.click();
  }
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="text-xl font-light text-gray-600 sm:text-2xl dark:text-white mb-6">
          Images
        </div>
        <div>
          <ButtonIcon type="primary" icon={faImage} showIcon={true} click={() => clickInput()}>
            Add image
          </ButtonIcon>

          <input type="file" ref={refFile} className="hidden" accept='image/png, image/jpeg'/>
        </div>
      </div>
      <div className="pt-4">
        {/* <ImageGateway /> */}
        <NoImage />
      </div>
    </>
  );
};

ImageGateway.propTypes = {
  gatewayId: PropTypes.string.isRequired
};

export default ImageGateway;
