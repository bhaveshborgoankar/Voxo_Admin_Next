import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Account, Permission } from '../../../Constant';
const UserNav = ({ setActiveTab, activeTab }) => {
  return (
    <Nav className='nav-pills mb-3' id='pills-tab' role='tablist'>
      <NavItem onClick={() => setActiveTab(1)}>
        <NavLink className={activeTab === 1 ? 'active' : ''}>{Account}</NavLink>
      </NavItem>
      <NavItem role='presentation' onClick={() => setActiveTab(2)}>
        <NavLink className={activeTab === 2 ? 'active' : ''}>{Permission}</NavLink>
      </NavItem>
    </Nav>
  );
};
export default UserNav;
