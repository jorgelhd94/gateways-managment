import React from 'react';
import Dashboard from '../../src/components/Layout/Dashboard/Dashboard';
import Card from '../../src/components/UI/Card/Card';
import ButtonIcon from '../../src/components/UI/Buttons/ButtonIcon/ButtonIcon';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Gateways() {
  return (
    <Dashboard>
      <div className='m-4'>
        <ButtonIcon text="New Gateway" type="success" icon={faPlus} showIcon={true} />
      </div>
      <Card>Gateways Page</Card>
    </Dashboard>
  );
}
