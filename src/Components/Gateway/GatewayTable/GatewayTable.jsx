import React, { useState, useEffect, useContext } from 'react';
import { functions, httpsCallable } from '../../../includes/firebase';

import { UserContext } from '../../../contexts';

import SimpleTable from '../../Tables/SimpleTable/SimpleTable';
import TD from '../../Tables/SimpleTable/TD/TD';

import TableSkeleton from '../../UI/Skeleton/TableSkeleton/TableSkeleton';

const GatewayTable = () => {
  const user = useContext(UserContext);
  const [fetchingData, setFetchingData] = useState(false);
  const [contentList, setContentList] = useState([]);

  const headerList = ['Serial', 'Name', 'IPv4'];

  const getData = async () => {
    setFetchingData(true);

    let responseData;

    const getAllGateways = httpsCallable(functions, 'gateway-all');
    await getAllGateways({ uid: user.uid })
      .then((result) => {
        responseData = result.data.listAll.map((data, row) => {
          return (
            <tr key={row}>
              <TD>{data.serial}</TD>
              <TD>{data.name}</TD>
              <TD>{data.ipv4}</TD>
            </tr>
          );
        });
        setContentList([...responseData]);
      })
      .catch((error) => {
        console.log(error.message);
      });

    setFetchingData(false);
  };

  useEffect(async () => {
    await getData();
  }, []);

  return (
    <div>
      {!fetchingData ? (
        <SimpleTable headerList={headerList} contentList={contentList} />
      ) : (
        <TableSkeleton />
      )}
    </div>
  );
};

export default GatewayTable;
