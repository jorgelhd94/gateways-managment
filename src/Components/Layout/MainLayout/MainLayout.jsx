import React, { useState, useEffect } from 'react';
import Head from '../Head/Head';
import { ToastContainer } from 'react-toastify';
import { auth, onAuthStateChanged } from '../../../includes/firebase';
import { useRouter } from 'next/router';

import { UserContext } from '../../../contexts'; 

const MainLayout = (props) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userRes) => {
      if (userRes) {
        setUser(userRes);
      }
    });

    return () => {
      unsubscribe();
    };
  });

  return user || router.pathname === '/login' ? (
    <UserContext.Provider value={user}>
      <Head></Head>
      {props.children}
      <ToastContainer />
    </UserContext.Provider>
  ) : (
    <p>Redirecting...</p>
  );
};

export default MainLayout;
