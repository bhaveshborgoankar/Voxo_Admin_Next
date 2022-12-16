import '../public/assets/css/linearicon.css';
import '../public/assets/scss/app.scss';
import Layout from '../Layout/index';
import ToggleProvider from '../Helper/ToggleContext/ToggleProvider';

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return (
    <>
      <ToggleProvider>{getLayout(<Component {...pageProps} />)}</ToggleProvider>
    </>
  );
};

export default MyApp;
