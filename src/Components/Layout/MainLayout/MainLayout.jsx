import React, { useState, useEffect } from 'react';
import Head from '../Head/Head';
import { ToastContainer } from 'react-toastify';
import { auth, onAuthStateChanged } from '../../../includes/firebase';

import { UserContext } from '../../../contexts';

const MainLayout = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userRes) => {
      if (userRes) {
        setUser(userRes);
      }
    });
  });

  return (
    <UserContext.Provider value={user}>
      <Head></Head>
      {props.children}
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default MainLayout;
