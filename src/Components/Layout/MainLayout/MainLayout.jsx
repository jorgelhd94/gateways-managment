import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from '../Head/Head';
import { ToastContainer } from 'react-toastify';
import { auth, onAuthStateChanged } from '../../../includes/firebase';

import { UserContext } from '../../../contexts';

const MainLayout = (props) => {
  const router = useRouter()
  const [user, setUser] = useState(null);
  const [isUserLoad, setIsUserLoad] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (userRes) => {
      if (userRes) {
        setUser(userRes);
      }
      setIsUserLoad(false);
    }, () => {
      router.push('/login')
    });
  });

  return (
    <UserContext.Provider value={([user, isUserLoad])}>
      <Head></Head>
      {props.children}
      <ToastContainer />
    </UserContext.Provider>
  );
};

export default MainLayout;
