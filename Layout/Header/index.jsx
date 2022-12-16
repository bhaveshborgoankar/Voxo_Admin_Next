import React, { useContext } from 'react';
import { AlignCenter } from 'react-feather';
import { Row } from 'reactstrap';
import HeaderNav from './HeaderNav';
import SearchBar from './SearchBar';
import CreateContextToggle from '../../Helper/ToggleContext';
const Header = () => {
  const { sidebarToggle } = useContext(CreateContextToggle);
  return (
    <div className={`page-header ${sidebarToggle ? 'close_icon' : ''}`}>
      <Row className='header-wrapper m-0'>
        <div className='header-logo-wrapper col-auto p-0'>
          <div className='logo-wrapper'>
            <a href='#javascript'>
              <img className='img-fluid main-logo' src={'/assets/images/logo/logo.png'} alt='logo' />
              <img className='img-fluid white-logo' src={'/assets/images/logo/logo-white.png'} alt='logo' />
            </a>
          </div>
          <div className='toggle-sidebar'>
            <AlignCenter className='status_toggle middle sidebar-toggle' />
          </div>
        </div>
        <SearchBar />
        <div className='nav-right col-4 pull-right right-header p-0'>
          <HeaderNav />
        </div>
      </Row>
    </div>
  );
};
export default Header;
