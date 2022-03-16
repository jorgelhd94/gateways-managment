import React from 'react';
import Link from 'next/link';
import Dashboard from '../../src/components/Layout/Dashboard/Dashboard';
import Card from '../../src/components/UI/Card/Card';
import ButtonIcon from '../../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import CreateForm from '../../src/components/Gateway/CreateForm/CreateForm';

export default function CreateGateways() {
  return (
    <Dashboard>
      <div className="mx-4">
        <Link href="/gateways">
          <a>
            <ButtonIcon text="Manage Gateways" type="primary" icon={faServer} showIcon={true} />
          </a>
        </Link>
      </div>
      <Card>
        <CreateForm/>

      </Card>
    </Dashboard>
  );
}
