import React from 'react';
import Link from 'next/link';
import Dashboard from '../../src/components/Layout/Dashboard/Dashboard';

import Card from '../../src/components/UI/Card/Card';
import ButtonIcon from '../../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

import CreateForm from '../../src/components/Device/CreateForm/CreateForm';

export default function CreateGateways() {
  return (
    <Dashboard>
      <div className="m-4">
        <Link href="/devices">
          <a>
            <ButtonIcon type="primary" icon={faLaptop} showIcon={true}>
              Manage Devices
            </ButtonIcon>
          </a>
        </Link>
      </div>
      <Card>
        <CreateForm />
      </Card>
    </Dashboard>
  );
}
