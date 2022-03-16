import React, { useState, useEffect, useContext } from 'react';
import { functions, httpsCallable } from '../../../includes/firebase';

import { UserContext } from '../../../contexts';

import SimpleTable from '../../Tables/SimpleTable/SimpleTable';
import TD from '../../Tables/SimpleTable/TD/TD';

import TableSkeleton from '../../UI/Skeleton/TableSkeleton/TableSkeleton';
import FetchError from '../../UI/FetchError/FetchError';
import { toast } from 'react-toastify';

const GatewayTable = () => {
  const user = useContext(UserContext);
  const [fetchingData, setFetchingData] = useState(false);
  const [showError, setShowError] = useState(false);
  const [contentList, setContentList] = useState([]);

  const headerList = ['Serial', 'Name', 'IPv4', ''];

  const tableComponent = () => {
    let component;

    if (showError) {
      component = <FetchError />;
    } else if (!fetchingData) {
      component = <SimpleTable headerList={headerList} contentList={contentList} />;
    } else {
      component = <TableSkeleton />;
    }

    return component;
  };

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
              <TD></TD>
            </tr>
          );
        });
        setContentList([...responseData]);
      })
      .catch((error) => {
        setShowError(true);
        const message = error.message;
        toast.error(message);
      });

    setFetchingData(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>{tableComponent()}</div>;
};

export default GatewayTable;
