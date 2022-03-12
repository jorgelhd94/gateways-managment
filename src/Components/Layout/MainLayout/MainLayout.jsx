import React from 'react';
import Head from '../Head/Head';
import { ToastContainer, toast } from 'react-toastify';

const MainLayout = (props) => {
  return (
    <React.Fragment>
      <Head></Head>
      {props.children}
      <ToastContainer />
    </React.Fragment>
  );
};

export default MainLayout;
