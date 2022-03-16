import React, { useState, useEffect, useContext } from 'react';
import { functions, httpsCallable } from '../../../includes/firebase';

import { UserContext } from '../../../contexts';

import SimpleTable from '../../Tables/SimpleTable/SimpleTable';
import TD from '../../Tables/SimpleTable/TD/TD';

const GatewayTable = () => {
  const user = useContext(UserContext);
  const [fetchingData, setFetchingData] = useState(false);
  const contentList = [];

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

  useEffect(async () => {
    setFetchingData(true);

    const getAllGateways = httpsCallable(functions, 'gateway-all');
    await getAllGateways({ uid: user.uid })
      .then((result) => {
        console.log(result);

        contentList = content.map((data, row) => {
          const listRow = Object.keys(data).map((key, col) => {
            return <TD key={row + '' + col}>{data[key]}</TD>;
          });
          return <tr key={row}>{listRow}</tr>;
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    setFetchingData(false);
  }, []);

  return (
    <div>
      {!fetchingData ? (
        <SimpleTable headerList={headerList} contentList={contentList} />
      ) : (
        'Fetching data'
      )}
    </div>
  );
};

export default GatewayTable;
