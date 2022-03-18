import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { functions, httpsCallable, db, doc, onSnapshot } from '../../../includes/firebase';

import Card from '../../UI/Card/Card';
import ButtonIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import DeviceTable from '../../Device/DeviceTable/DeviceTable';

import FormSkeleton from '../../UI/Skeleton/FormSkeleton/FormSkeleton';
import { toast } from 'react-toastify';

const Details = () => {
  const router = useRouter();
  const { gid } = router.query;

  const [gateway, setGateway] = useState({
    serial: '',
    name: '',
    ipv4: '',
    devices: 0
  });
  const [isFetchingData, setIsFetchingData] = useState(true);

  const getData = async () => {
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
  };
  useEffect(() => {
    getData();
  }, []);

  //Listen for changes
  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, 'gateway', gid.toString()),
      (doc) => {
        setGateway(doc.data());
      },
      (error) => {
        toast.error(error.message);
      }
    );
    return () => unsub();
  });

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

          <div className="flex flex-row">
            <div className="text-md font-bold text-gray-600 dark:text-white mb-2">
              Capacity: {gateway.devices}/10
            </div>
          </div>

          <DeviceTable gateway={gid} />
        </Card>
      )}
    </>
  );
};

export default Details;
