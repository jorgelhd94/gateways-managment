import React from 'react';
import Link from 'next/link';
import Dashboard from '../../src/components/Layout/Dashboard/Dashboard';
import Card from '../../src/components/UI/Card/Card';
import ButtonIcon from '../../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import GatewayTable from '../../src/components/Gateway/GatewayTable/GatewayTable';

export default function Gateways() {
  return (
    <Dashboard>
      <div className="overflow-y-scroll h-screen pb-32">
        <div className="mx-4 mb-2">
          <Link href="/gateways/create">
            <a>
              <ButtonIcon text="New Gateway" type="success" icon={faPlus} showIcon={true} />
            </a>
          </Link>
        </div>
        <Card>
          <GatewayTable />
        </Card>
      </div>
    </Dashboard>
  );
}
