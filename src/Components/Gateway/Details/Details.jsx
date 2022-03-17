import React from 'react';
import Link from 'next/link';

import { functions, httpsCallable } from '../../../includes/firebase';

import Card from '../../UI/Card/Card';
import ButtonIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EmptyList from '../../UI/PageInfo/EmptyList/EmptyList';

const Details = () => {
  return (
    <>
      <Card>
        <div className="flex flex-col justify-start">
          <div className="text-xl font-light text-gray-600 sm:text-2xl dark:text-white mb-6">
            Details Gateway
          </div>
          <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
            <p className="font-medium">
              Serial: <span className="font-normal">sdkjfhskjdfh</span>
            </p>
          </div>
          <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
            <p className="font-medium">
              Name: <span className="font-normal">sdkjfhskjdfh</span>
            </p>
          </div>
          <div className="text-md text-gray-600 sm:text-lg dark:text-white mb-2">
            <p className="font-medium">
              IPv4: <span className="font-normal">sdkjfhskjdfh</span>
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="text-xl font-light text-gray-600 sm:text-2xl dark:text-white mb-2">
          Devices
        </div>

        <Link href="/gateways/create">
          <a>
            <ButtonIcon type="success" icon={faPlus} showIcon={true}>
              Add device
            </ButtonIcon>
          </a>
        </Link>

        <EmptyList/>
      </Card>
    </>
  );
};

export default Details;
