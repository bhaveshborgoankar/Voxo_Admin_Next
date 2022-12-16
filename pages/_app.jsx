import '../public/assets/css/linearicon.css';
import '../public/assets/scss/app.scss';
import Layout from '../Layout/index';
import ToggleProvider from '../Helper/ToggleContext/ToggleProvider';
import { CookiesProvider } from 'react-cookie';

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return (
    <>
      <CookiesProvider>
        <ToggleProvider>{getLayout(<Component {...pageProps} />)}</ToggleProvider>
      </CookiesProvider>
    </>
  );
};

export default MyApp;
