import React from 'react';
import Link from 'next/link';
import Dashboard from '../../src/components/Layout/Dashboard/Dashboard';
import ButtonIcon from '../../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import Details from '../../src/components/Gateway/Details/Details';

export default function DetailGateways() {
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

      <Details />
    </Dashboard>
  );
}
