import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { functions, httpsCallable } from '../../../includes/firebase';
import { useRouter } from 'next/router';
import formatDate from '../../../utils/formatDate';

import { UserContext } from '../../../contexts';

import SimpleTable from '../../Tables/SimpleTable/SimpleTable';
import TD from '../../Tables/SimpleTable/TD/TD';

import TableSkeleton from '../../UI/Skeleton/TableSkeleton/TableSkeleton';
import EmptyList from '../../UI/PageInfo/EmptyList/EmptyList';
import FetchError from '../../UI/PageInfo/FetchError/FetchError';
import { toast } from 'react-toastify';
import BtnIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import Badge from '../../UI/Badge/Badge';

import { faEye, faPencil, faTrash, faServer } from '@fortawesome/free-solid-svg-icons';

const DeviceTable = (props) => {
  const [user] = useContext(UserContext);
  const router = useRouter();

  const [fetchingData, setFetchingData] = useState(false);
  const [showError, setShowError] = useState(false);
  const [contentList, setContentList] = useState([]);

  let headerList = ['UID', 'Vendor', 'Status', 'Created', 'Gateway', ''];

  if (props.gateway) {
    headerList = ['UID', 'Vendor', 'Status', 'Created', ''];
  }
  
  const getData = async () => {
    setFetchingData(true);
    setShowError(false);

    let getDevices = httpsCallable(functions, 'device-all');
    let sendData = { user: user.uid };

    if (props.gateway) {
      getDevices = httpsCallable(functions, 'device-getByGateway');
      sendData['gateway'] = props.gateway;
    }

    await getDevices(sendData)
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

  const deleteDevice = async (id) => {
    if (window.confirm('Are you sure?')) {
      setFetchingData(true);
      const removeDevice = httpsCallable(functions, 'device-delete');
      await removeDevice({ id })
        .then(() => {
          getData();
          toast.success('The device was removed correctly');
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
          <TD>{data.uid}</TD>
          <TD>{data.vendor}</TD>
          <TD>
            <Badge type={data.online ? 'success' : 'sad'}>
              {data.online ? 'Online' : 'Offline'}
            </Badge>
          </TD>
          <TD>{formatDate(data.onCreated)}</TD>
          {!props.gateway && (
            <TD>
              <BtnIcon
                type="primary"
                icon={faServer}
                showIcon={true}
                click={() => router.push('/gateways/' + data.gateway)}
              />
            </TD>
          )}
          <TD>
            <span className="flex gap-2">
              <BtnIcon
                type="info"
                icon={faEye}
                showIcon={true}
                click={() => router.push('/devices/' + data.docId)}
              />
              <BtnIcon
                type="success"
                icon={faPencil}
                showIcon={true}
                click={() => router.push('/devices/edit/' + data.docId)}
              />
              <BtnIcon
                type="danger"
                icon={faTrash}
                showIcon={true}
                click={() => deleteDevice(data.docId)}
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
    } else if (!fetchingData) {
      component =
        contentList.length === 0 ? (
          <EmptyList />
        ) : (
          <SimpleTable headerList={headerList} contentList={transformData()} />
        );
    } else {
      component = <TableSkeleton />;
    }

    return component;
  };

  return <div>{tableComponent()}</div>;
};

DeviceTable.propTypes = {
  gateway: PropTypes.string
};

export default DeviceTable;
