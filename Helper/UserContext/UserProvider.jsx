import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import UserContext from '.';

const UserProvider = (props) => {
  const [userEdit, setUserEdit] = useState({});
  const [uat, setUat] = useCookies(['uat']);
  const [fpEmailCookie, setFpEmailCookie, removeFpEmailCookie] = useCookies(['fpemail']);
  const [voCookie, setVoCookie, removeVoCookie] = useCookies(['vo']);

  return (
    <UserContext.Provider value={{ uat, setUat, userEdit, setUserEdit, fpEmailCookie, setFpEmailCookie, removeFpEmailCookie, voCookie, setVoCookie, removeVoCookie, ...props }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
