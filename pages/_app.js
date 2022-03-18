import { useState, useEffect } from 'react';
import Router from 'next/router';

import '../styles/global.css';

import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';

import 'react-toastify/dist/ReactToastify.css';

import MainLayout from '../src/components/Layout/MainLayout/MainLayout';
import LoadingScreen from '../src/components/UI/Preloaders/LoadingScreen/LoadingScreen';
import ProgressBar from '@badrap/bar-of-progress';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const progress = new ProgressBar({
  size: 3,
  color: '#3b82f6',
  className: 'bar-of-progress',
  delay: 100
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function preloader() {
      setLoading(false);
    }

    window.addEventListener('load', preloader);

    return () => window.removeEventListener('load', preloader);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default App;
