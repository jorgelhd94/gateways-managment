import React, { useState, useEffect, useContext } from 'react';
import { functions, httpsCallable, storage, ref, deleteObject } from '../../../includes/firebase';
import { useRouter } from 'next/router';

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
  const [user] = useContext(UserContext);
  const router = useRouter();

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

  const deleteGateway = async (id, imageUrl) => {
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

      if (imageUrl) {
        const imageRef = ref(storage, 'gatewayImage/' + id);

        await deleteObject(imageRef).catch((error) => {
          toast.error(error.message);
        });
      }

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
          <TD>
            <Badge>{data.devices}</Badge>
          </TD>
          <TD>
            <span className="flex gap-2">
              <BtnIcon
                type="info"
                icon={faEye}
                showIcon={true}
                click={() => router.push('/gateways/' + data.docId)}
              />
              <BtnIcon
                type="success"
                icon={faPencil}
                showIcon={true}
                click={() => router.push('/gateways/edit/' + data.docId)}
              />
              <BtnIcon
                type="danger"
                icon={faTrash}
                showIcon={true}
                click={() => deleteGateway(data.docId, data.imageUrl)}
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

export default GatewayTable;
