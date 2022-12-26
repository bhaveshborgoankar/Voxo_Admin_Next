import React, { useState } from 'react';
import UserContext from '.';

const UserProvider = (props) => {
  const [userEdit, setUserEdit] = useState({});
  const [active, setActive] = useState({ status: false, title: '' });
  return (
    <UserContext.Provider
      value={{ userEdit, setUserEdit, active, setActive, ...props }}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
