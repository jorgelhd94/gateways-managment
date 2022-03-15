import React from 'react';
import Link from 'next/link';
import Dashboard from '../../src/components/Layout/Dashboard/Dashboard';
import Card from '../../src/components/UI/Card/Card';
import ButtonIcon from '../../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

export default function CreateGateways() {
  return (
    <Dashboard>
      <div className="m-4">
        <Link href="/devices">
          <a>
            <ButtonIcon text="Manage Devices" type="primary" icon={faLaptop} showIcon={true} />
          </a>
        </Link>
      </div>
      <Card>Create Device</Card>
    </Dashboard>
  );
}