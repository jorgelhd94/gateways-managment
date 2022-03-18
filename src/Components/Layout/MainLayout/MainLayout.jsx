import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from '../Head/Head';
import { ToastContainer } from 'react-toastify';

const MainLayout = (props) => {
  const router = useRouter();


  return (
    <>
      <Head></Head>
      {props.children}
      <ToastContainer />
    </>
  );
};

export default MainLayout;
