import React from 'react';
import SimpleTable from '../../Tables/SimpleTable/SimpleTable';

const GatewayTable = () => {
  const headerList = ['Serial', 'Name', 'IPv4'];
  const contentList = [
    {
      serial: 'asdasd',
      name: 'Loasdlkj',
      ipv4: '10.0.0.1'
    },
    {
      serial: 'asdasd',
      name: 'Loasdlkj',
      ipv4: '10.0.0.1'
    },
    {
      serial: 'asdasd',
      name: 'Loasdlkj',
      ipv4: '10.0.0.1'
    },
    {
      serial: 'asdasd',
      name: 'Loasdlkj',
      ipv4: '10.0.0.1'
    }
  ];

  return (
    <div>
      <SimpleTable headerList={headerList} contentList={contentList} />
    </div>
  );
};

export default GatewayTable;
