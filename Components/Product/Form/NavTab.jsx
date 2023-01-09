import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { General, Stock, Type } from '../../../Constant';

const NavTab = (props) => {
  const { activeTab } = props;
  return (
    <Nav className='nav-pills mb-3'>
      <NavItem>
        <NavLink className={`${activeTab === 1 ? 'active' : ''}`}>{General}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`${activeTab === 2 ? 'active' : ''}`}>{Type}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={`${activeTab === 3 ? 'active' : ''}`}>{Stock}</NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavTab;
