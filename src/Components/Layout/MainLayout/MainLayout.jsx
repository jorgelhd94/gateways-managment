import React from 'react';
import Head from '../Head/Head';
import { ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import { auth, onAuthStateChanged } from '../../../includes/firebase';

const UserContext = React.createContext();

const MainLayout = (props) => {
  const router = useRouter();
  let user = null;

  onAuthStateChanged(auth, (userRes) => {
    if (userRes) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      user = user;
      // ...
    } else {
      router.push('/login');
    }
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
