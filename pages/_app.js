import '../public/assets/css/global.css';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import 'react-toastify/dist/ReactToastify.css';

config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
