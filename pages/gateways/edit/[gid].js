import React from 'react';
import Link from 'next/link';
import Dashboard from '../../../src/components/Layout/Dashboard/Dashboard';
import Card from '../../../src/components/UI/Card/Card';
import ButtonIcon from '../../../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import EditForm from '../../../src/components/Gateway/EditForm/EditForm';

export default function EditGateways() {
  return (
    <Dashboard>
      <div className="mx-4">
        <Link href="/gateways">
          <a>
            <ButtonIcon type="primary" icon={faServer} showIcon={true}>
              Manage Gateways
            </ButtonIcon>
          </a>
        </Link>
      </div>
      <Card>
        <EditForm />
      </Card>
    </Dashboard>
  );
}
