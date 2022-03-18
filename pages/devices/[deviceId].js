import React from 'react';
import Link from 'next/link';
import Dashboard from '../../src/components/Layout/Dashboard/Dashboard';
import ButtonIcon from '../../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import Details from '../../src/components/Device/Details/Details';

export default function DetailDevices() {
  return (
    <Dashboard>
      <div className="mx-4">
        <Link href="/devices">
          <a>
            <ButtonIcon type="primary" icon={faLaptop} showIcon={true}>
              Manage Devices
            </ButtonIcon>
          </a>
        </Link>
      </div>

      <Details />
    </Dashboard>
  );
}
