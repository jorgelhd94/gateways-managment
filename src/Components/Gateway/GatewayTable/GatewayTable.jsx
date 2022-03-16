import React, { useState, useEffect, useContext } from 'react';
import { functions, httpsCallable, doc, onSnapshot } from '../../../includes/firebase';

import { UserContext } from '../../../contexts';

import SimpleTable from '../../Tables/SimpleTable/SimpleTable';
import TD from '../../Tables/SimpleTable/TD/TD';

import TableSkeleton from '../../UI/Skeleton/TableSkeleton/TableSkeleton';
import EmptyList from '../../UI/PageInfo/EmptyList/EmptyList';
import FetchError from '../../UI/PageInfo/FetchError/FetchError';
import { toast } from 'react-toastify';
import BtnIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import Badge from '../../UI/Badge/Badge';

import { faEye, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

const GatewayTable = () => {
  const user = useContext(UserContext);
  const [fetchingData, setFetchingData] = useState(false);
  const [showError, setShowError] = useState(false);
  const [contentList, setContentList] = useState([]);

  const headerList = ['Serial', 'Name', 'IPv4', 'Devices', ''];

  const getData = async () => {
    setFetchingData(true);
    setShowError(false);

    const getAllGateways = httpsCallable(functions, 'gateway-all');
    await getAllGateways({ uid: user.uid })
      .then((result) => {
        setContentList([...result.data.listAll]);
      })
      .catch((error) => {
        setShowError(true);
        const message = error.message;
        toast.error(message);
      });

    setFetchingData(false);
  };

  const deleteGateway = async (id) => {
    if (window.confirm('Are you sure?')) {
      setFetchingData(true);
      const removeGateway = httpsCallable(functions, 'gateway-delete');
      await removeGateway({ id })
        .then(() => {
          getData();
          toast.success('The gateway was removed correctly');
        })
        .catch((error) => {
          const message = error.message;
          toast.error(message);
        });
      setFetchingData(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const transformData = () => {
    return contentList.map((data, row) => {
      return (
        <tr key={row}>
          <TD>{data.serial}</TD>
          <TD>{data.name}</TD>
          <TD>{data.ipv4}</TD>
          <TD><Badge>{data.devices}</Badge></TD>
          <TD>
            <span className="flex gap-2">
              <BtnIcon
                type="info"
                icon={faEye}
                showIcon={true}
                click={() => console.log(data.docId)}
              />
              <BtnIcon type="success" icon={faPencil} showIcon={true} />
              <BtnIcon
                type="danger"
                icon={faTrash}
                showIcon={true}
                click={() => deleteGateway(data.docId)}
              />
            </span>
          </TD>
        </tr>
      );
    });
  };

  const tableComponent = () => {
    let component;

    if (showError) {
      component = <FetchError />;
    } else if (!fetchingData && contentList.length === 0) {
      component = <EmptyList />;
    } else if (!fetchingData) {
      component = <SimpleTable headerList={headerList} contentList={transformData()} />;
    } else {
      component = <TableSkeleton />;
    }

    return component;
  };

  return <div>{tableComponent()}</div>;
};

export default GatewayTable;
