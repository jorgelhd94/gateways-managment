import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { functions, httpsCallable } from '../../../includes/firebase';

import Card from '../../UI/Card/Card';
import Badge from '../../UI/Badge/Badge';
import FormSkeleton from '../../UI/Skeleton/FormSkeleton/FormSkeleton';
import ButtonIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

import formatDate from '../../../utils/formatDate';

const Details = () => {
  const router = useRouter();
  const { deviceId } = router.query;

  const [device, setDevice] = useState({
    uid: 'Not found',
    vendor: 'Not found',
    status: 'Not found',
    onCreated: 'Not found',
    gateway: 'Not found'
  });
  const [isFetchingData, setIsFetchingData] = useState(true);

  useEffect(async () => {
    setIsFetchingData(true);
    const getDevice = httpsCallable(functions, 'device-getDoc');
    await getDevice({ docId: deviceId })
      .then((result) => {
        if (result.data.doc) {
          setDevice(result.data.doc);
          setIsFetchingData(false);
        } else {
          router.push('/devices');
        }
      })
      .catch((error) => {
        const message = error.message;
        toast.error(message);
      });
  }, []);

  return (
    <>
      <Card>
        {isFetchingData ? (
          <FormSkeleton />
        ) : (
          <>
            <div className="flex flex-row flex-nowrap justify-between">
              <div className="text-xl font-light text-gray-600 sm:text-2xl dark:text-white mb-6">
                Details Device
              </div>
              <Link href={'/gateways/' + device.gateway}>
                <a>
                  <ButtonIcon type="primary" icon={faServer} showIcon={true}>
                    Gateway
                  </ButtonIcon>
                </a>
              </Link>
            </div>
            <div className="flex flex-col justify-start">
              <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
                <p className="font-medium">
                  UID: <span className="font-normal">{device.uid}</span>
                </p>
              </div>
              <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
                <p className="font-medium">
                  Vendor: <span className="font-normal">{device.vendor}</span>
                </p>
              </div>
              <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
                <p className="font-medium">
                  Created: <span className="font-normal">{formatDate(device.onCreated)}</span>
                </p>
              </div>
              <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
                <p className="font-medium">
                  Status:{' '}
                  <span className="font-normal">
                    <Badge type={device.online ? 'success' : 'sad'}>
                      {device.online ? 'Online' : 'Offline'}
                    </Badge>
                  </span>
                </p>
              </div>
            </div>
          </>
        )}
      </Card>
    </>
  );
};

export default Details;
