import { useState, useEffect } from 'react';
import '../styles/global.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from '../src/components/Layout/MainLayout/MainLayout';
import LoadingScreen from '../src/components/UI/Preloaders/LoadingScreen/LoadingScreen';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.addEventListener('load', (event) => {
      setLoading(false);
    });
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
