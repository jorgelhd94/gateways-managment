import React from 'react';
import SimpleTable from '../../Tables/SimpleTable/SimpleTable';
import TD from '../../Tables/SimpleTable/TD/TD';

const GatewayTable = () => {
  const headerList = ['Serial', 'Name', 'IPv4'];
  const content = [
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

  const contentList = content.map((data, row) => {
    const listRow = Object.keys(data).map((key, col) => {
      return <TD key={row + '' + col}>{data[key]}</TD>
    });
    return <tr key={row}>{listRow}</tr>;
  });

  return (
    <div>
      <SimpleTable headerList={headerList} contentList={contentList} />
    </div>
  );
};

export default GatewayTable;
