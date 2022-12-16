import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import TapTop from './TapTop';
const Layout = (props) => {
  return (
    <>
      <TapTop />
      <div className='page-wrapper compact-wrapper dark-sidebar' id='pageWrapper'>
        <Header />
        <div className='page-body-wrapper'>
          <Sidebar />
          <div className='page-body'>{props.children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Layout;
