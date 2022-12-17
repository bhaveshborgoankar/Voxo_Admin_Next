import { useRouter } from 'next/router';
import React from 'react';
import AddNewUsersContains from '../../Components/Users/Add New User';

const UpdateUser = () => {
  const router = useRouter();
  return <AddNewUsersContains router={router.query._id} />;
};

export default UpdateUser;
