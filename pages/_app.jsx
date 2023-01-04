import '../public/assets/css/linearicon.css';
import '../public/assets/scss/app.scss';
import { useEffect, useState } from 'react';
import NextNProgress from 'nextjs-progressbar';
import { ToastContainer } from 'react-toastify';
import Layout from '../Layout/index';
import ToggleProvider from '../Helper/ToggleContext/ToggleProvider';
import UserProvider from '../Helper/UserContext/UserProvider';
import { useRouter } from 'next/router';
import ProductProvider from '../Helper/ProductContext/ProductProvider';

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const handleStart = (url) => {
  //     console.log(`Loading: ${url}`);
  //     setIsLoading(true);
  //     // setTimeout(() => {
  //     //   setIsLoading(true);
  //     // }, 5000);
  //   };

  //   const handleStop = () => {
  //     setIsLoading(false);
  //   };

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleStop);
  //   // router.events.on('routeChangeError', handleStop);

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleStop);
  //     // router.events.off('routeChangeError', handleStop);
  //   };
  // }, [router]);
  return (
    <>
      <ProductProvider>
        <UserProvider>
          <ToggleProvider>
            <NextNProgress color='#e22454' />
            {/* {isLoading ? <NextNProgress /> : console.log('Else=>>>>isLoading', isLoading)} */}
            {getLayout(<Component {...pageProps} />)}
          </ToggleProvider>
        </UserProvider>
      </ProductProvider>
      <ToastContainer />
    </>
  );
};

export default MyApp;
