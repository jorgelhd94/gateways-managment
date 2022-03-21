import React from 'react';
import PropTypes from 'prop-types';
import Head from '../Head/Head';
import { ToastContainer } from 'react-toastify';

const MainLayout = (props) => {
  return (
    <>
      <Head></Head>
      {props.children}
      <ToastContainer />
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
