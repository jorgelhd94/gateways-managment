import React from 'react';
import Link from 'next/link';
import Dashboard from '../../src/components/Layout/Dashboard/Dashboard';
import Card from '../../src/components/UI/Card/Card';
import ButtonIcon from '../../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import DeviceTable from '../../src/components/Device/DeviceTable/DeviceTable';

export default function Devices() {
  return (
    <Dashboard>
      <div className="mx-4 mb-2">
        <Link href="/devices/create">
          <a>
            <ButtonIcon type="success" icon={faPlus} showIcon={true}>
              New Device
            </ButtonIcon>
          </a>
        </Link>
      </div>
      <Card>
        <div className="text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Manage Devices
        </div>
        <DeviceTable />
      </Card>
    </Dashboard>
  );
}
