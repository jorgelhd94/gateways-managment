import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  functions,
  httpsCallable,
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject
} from '../../../includes/firebase';

import ImageDisplay from '../ImageGatewayDisplay/ImageGatewayDisplay';
import ButtonIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import { faImage, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

import { toast } from 'react-toastify';

const ImageGateway = (props) => {
  const refFile = useRef(null);
  const [uploadTask, setUploadTask] = useState({
    task: null,
    current_progress: 100,
    name: ''
  });

  const [image, setImage] = useState(props.image);

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
          .then(async (urlImg) => {
            setImage('');
            await updateGatewayImage(urlImg);
            setImage(urlImg);
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    );
  };

  useEffect(() => {
    return () => {
      if (uploadTask.task) {
        uploadTask.task.cancel();
      }
    };
  }, []);

  const updateGatewayImage = async (imageUrl) => {
    const addImage = httpsCallable(functions, 'gateway-addImage');
    await addImage({ imageUrl: imageUrl, docId: props.gatewayId }).catch((error) => {
      const message = error.message;
      toast.error(message);
    });
  };

  const deleteImage = async () => {
    if (window.confirm('Are you sure?')) {
      const delImg = httpsCallable(functions, 'gateway-addImage');
      await delImg({ imageUrl: '', docId: props.gatewayId }).catch((error) => {
        const message = error.message;
        toast.error(message);
      });

      const imageRef = ref(storage, 'gatewayImage/' + props.gatewayId);

      await deleteObject(imageRef)
        .then(() => {
          setImage('');
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="text-xl font-light text-gray-600 sm:text-2xl dark:text-white mb-6">
          Image
        </div>
        {!props.image ? (
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
        ) : (
          <div className="flex flex-row justify-around h-min gap-1">
            <ButtonIcon type="success" icon={faPencil} showIcon={true} click={() => clickInput()} />
            <ButtonIcon
              type="danger"
              icon={faTrash}
              showIcon={true}
              click={() => deleteImage('')}
            />

            <input
              type="file"
              ref={refFile}
              className="hidden"
              onChange={($event) => upload($event)}
              accept="image/png, image/jpeg"
            />
          </div>
        )}
      </div>
      <div className="pt-4">
        {uploadTask.task ? (
          <div className="flex h-4 overflow-hidden bg-gray-200 rounded">
            <div
              className="transition-all progress-bar bg-green-400"
              // eslint-disable-next-line prettier/prettier
              style={{ width: uploadTask.current_progress + '%' }}
            ></div>
          </div>
        ) : (
          <ImageDisplay url={image} />
        )}
      </div>
    </>
  );
};

ImageGateway.propTypes = {
  gatewayId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ImageGateway;
