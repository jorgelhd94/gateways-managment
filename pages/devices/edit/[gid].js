import React from 'react';
import Link from 'next/link';
import Dashboard from '../../../src/components/Layout/Dashboard/Dashboard';
import Card from '../../../src/components/UI/Card/Card';
import ButtonIcon from '../../../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import EditDevice from '../../../src/components/Device/EditDevice/EditDevice';

export default function EditDevices() {
  return (
    <Dashboard>
      <div className="mx-4">
        <Link href="/devices">
          <a>
            <ButtonIcon type="primary" icon={faServer} showIcon={true}>
              Manage Devices
            </ButtonIcon>
          </a>
        </Link>
      </div>
      <Card>
        <EditDevice />
      </Card>
    </Dashboard>
  );
}
