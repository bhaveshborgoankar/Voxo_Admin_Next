import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { General, Restriction, Usage } from '../../../Constant';
const CouponNavs = ({ setActive, active }) => {
  return (
    <Nav className='nav-pills mb-3'>
      <NavItem onClick={() => setActive(1)}>
        <NavLink className={active === 1 ? 'active' : ''}>{General}</NavLink>
      </NavItem>
      <NavItem onClick={() => setActive(2)}>
        <NavLink className={active === 2 ? 'active' : ''}>{Restriction}</NavLink>
      </NavItem>
      <NavItem onClick={() => setActive(3)}>
        <NavLink className={active === 3 ? 'active' : ''}>{Usage}</NavLink>
      </NavItem>
    </Nav>
  );
};
export default CouponNavs;
