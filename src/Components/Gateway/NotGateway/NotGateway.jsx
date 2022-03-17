import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import ButtonIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import { faServer } from '@fortawesome/free-solid-svg-icons';

const NotGateway = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src="/assets/img/gateway.svg" width={100} height={100} />
      <p className="font-light mt-2 mb-4">There are no Gateways available!!</p>
      <ButtonIcon
        type="success"
        showIcon={true}
        icon={faServer}
        click={() => router.push('/gateways/create')}>
        Create a new gateway
      </ButtonIcon>
    </div>
  );
};

export default NotGateway;
