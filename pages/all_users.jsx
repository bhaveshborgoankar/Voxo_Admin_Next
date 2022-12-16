import React from 'react';
import request from '../Utils/APIService';
import AllUsersContain from '../Components/Users/All Users';
import { getUsersAPI } from '../Constant/APIRoutes';

const AllUsers = ({ data }) => {
  return <AllUsersContain data={data} />;
};

export async function getServerSideProps() {
  const res = await request({ url: getUsersAPI });
  const data = await res;

  return { props: data.data };
}

export default AllUsers;
