import React, { useState, useEffect } from 'react';
import Head from '../Head/Head';
import { ToastContainer } from 'react-toastify';
import { auth, onAuthStateChanged } from '../../../includes/firebase';
import { useRouter } from 'next/router';

const UserContext = React.createContext();

const useUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (userRes) => {
      if (userRes) {
        setUser(userRes);
      }
    });
  });

  return user;
};

const MainLayout = (props) => {
  let user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user && router.pathname !== '/login') {
      router.push('/login');
    }
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
