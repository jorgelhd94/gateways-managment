import React, { useState, useContext, useEffect } from 'react';
import CreateForm from '../CreateForm/CreateForm';

import { toast } from 'react-toastify';
import FormSkeleton from '../../UI/Skeleton/FormSkeleton/FormSkeleton';
import NotGateway from '../../Gateway/NotGateway/NotGateway';

import { functions, httpsCallable } from '../../../includes/firebase';

import { UserContext } from '../../../contexts';

const CreateDevice = () => {
  const [user] = useContext(UserContext);

  /* Get gateways */
  const [listGateways, setListGateways] = useState([]);
  const [fetchingGateways, setFetchingGateways] = useState(true);

  async function getGateways() {
    setFetchingGateways(true);

    const getList = httpsCallable(functions, 'device-listGateways');
    await getList({ uid: user.uid })
      .then((result) => {
        setListGateways([...result.data.listAll]);
      })
      .catch((error) => {
        toast.error(error.message);
      });

    setFetchingGateways(false);
  }

  useEffect(() => {
    getGateways();
  }, []);
  /* End Get gateways */


  return (
    <div>
      {!fetchingGateways ? (
        <>
          <div className="mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            Create a new Device
          </div>

          {listGateways.length ? <CreateForm listGateways={listGateways} /> : <NotGateway/>}
        </>
      ) : (
        <FormSkeleton />
      )}
    </div>
  );
};

export default CreateDevice;
