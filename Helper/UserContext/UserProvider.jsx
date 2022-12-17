import React, { useState } from 'react';
import UserContext from '.';

const UserProvider = (props) => {
  const [userEdit, setUserEdit] = useState({});

  return <UserContext.Provider value={{ userEdit, setUserEdit, ...props }}>{props.children}</UserContext.Provider>;
};
export default UserProvider;
