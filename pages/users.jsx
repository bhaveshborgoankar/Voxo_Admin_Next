import React from 'react';
import request from '../Utils/APIService';
import AllUsersContain from '../Components/Users/All Users';
import { getUsersAPI } from '../Constant/APIRoutes';

const AllUsers = ({ data }) => {
  return <AllUsersContain data={data && data} />;
};

export async function getServerSideProps(context) {
  const unique = context?.req?.cookies?.uat;
  const res = await request({ url: getUsersAPI, token: unique });
  const data = await res;
  return { props: data?.data };
}

export default AllUsers;
