import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { functions, httpsCallable } from '../../../includes/firebase';

import Card from '../../UI/Card/Card';
import ButtonIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EmptyList from '../../UI/PageInfo/EmptyList/EmptyList';

import DeviceTable from '../../Device/DeviceTable/DeviceTable';

import FormSkeleton from '../../UI/Skeleton/FormSkeleton/FormSkeleton';

const Details = () => {
  const router = useRouter();
  const { gid } = router.query;

  const [gateway, setGateway] = useState({
    serial: '',
    name: '',
    ipv4: ''
  });
  const [isFetchingData, setIsFetchingData] = useState(true);

  useEffect(async () => {
    setIsFetchingData(true);
    const getGateway = httpsCallable(functions, 'gateway-getDoc');
    await getGateway({ docId: gid })
      .then((result) => {
        if (result.data.doc) {
          setGateway(result.data.doc);
          setIsFetchingData(false);
        } else {
          router.push('/gateways');
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
          <div className="flex flex-col justify-start">
            <div className="text-xl font-light text-gray-600 sm:text-2xl dark:text-white mb-6">
              Details Gateway
            </div>
            <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
              <p className="font-medium">
                Serial: <span className="font-normal">{gateway.serial}</span>
              </p>
            </div>
            <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
              <p className="font-medium">
                Name: <span className="font-normal">{gateway.name}</span>
              </p>
            </div>
            <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
              <p className="font-medium">
                IPv4: <span className="font-normal">{gateway.ipv4}</span>
              </p>
            </div>
            <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
              <p className="font-medium">
                Devices: <span className="font-normal">{gateway.devices}</span>
              </p>
            </div>
          </div>
        )}
      </Card>

      {!isFetchingData && (
        <Card>
          <div className="flex flex-row flex-wrap justify-between">
          <div className="text-xl font-light text-gray-600 sm:text-2xl dark:text-white mb-2">
            Devices
          </div>

          <Link href="/devices/create">
            <a>
              <ButtonIcon type="success" icon={faPlus} showIcon={true}>
                Add device
              </ButtonIcon>
            </a>
          </Link>
          </div>

          <DeviceTable gateway={gid}/>
        </Card>
      )}
    </>
  );
};

export default Details;
