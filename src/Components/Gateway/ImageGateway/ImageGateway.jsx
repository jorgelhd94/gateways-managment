import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { storage, ref, uploadBytesResumable, getDownloadURL } from '../../../includes/firebase';

import NoImage from '../../UI/PageInfo/NoImage/NoImage';
import ButtonIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import { toast } from 'react-toastify';

const ImageGateway = (props) => {
  const refFile = useRef(null);
  const [uploadTask, setUploadTask] = useState({
    task: {},
    current_progress: 100,
    name: ''
  });

  

  const clickInput = () => {
    refFile.current.click();
  };

  const upload = ($event) => {
    const file = $event.target.files[0];

    const imageRef = ref(storage, `gatewayImage/${props.gatewayId}`);
    const task = uploadBytesResumable(imageRef, file);

    setUploadTask({
      task: task,
      current_progress: 0,
      name: file.name
    });

    task.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadTask({ current_progress: progress });
      },
      (error) => {
        toast.error(error.message);
      },
      async () => {
        await getDownloadURL(task.snapshot.ref)
          .then((urlImg) => {
            console.log(urlImg);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    );
  };

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

          <input
            type="file"
            ref={refFile}
            className="hidden"
            onChange={($event) => upload($event)}
            accept="image/png, image/jpeg"
          />
        </div>
      </div>
      <div className="pt-4">
        <div className="flex h-4 overflow-hidden bg-gray-200 rounded">
          <div
            className="transition-all progress-bar bg-green-400"
            style={{ width: uploadTask.current_progress + '%' }}></div>
        </div>

        <NoImage />
      </div>
    </>
  );
};

ImageGateway.propTypes = {
  gatewayId: PropTypes.string.isRequired
};

export default ImageGateway;
