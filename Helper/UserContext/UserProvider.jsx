import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import UserContext from '.';

const UserProvider = (props) => {
  const [userEdit, setUserEdit] = useState({});
  const [active, setActive] = useState({ status: false, title: '' });
  const [uat, setUat, removeUat] = useCookies(['uat']);
  const [fpEmailCookie, setFpEmailCookie, removeFpEmailCookie] = useCookies(['fpemail']);
  const [voCookie, setVoCookie, removeVoCookie] = useCookies(['vo']);
  console.log('In contexyt', uat, '=>>', setUat);
  return (
    <UserContext.Provider
      value={{ uat, setUat, removeUat, userEdit, setUserEdit, fpEmailCookie, setFpEmailCookie, removeFpEmailCookie, voCookie, setVoCookie, removeVoCookie, active, setActive, ...props }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
