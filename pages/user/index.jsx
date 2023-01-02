import React from 'react';
import request from '../../Utils/APIService';
import { getUsersAPI } from '../../Constant/APIRoutes';
import UsersContain from '../../Components/Users/UsersContain';

const AllUsers = ({ data }) => {
  if (!data) return null;
  return <UsersContain data={data && data} />;
};

export async function getServerSideProps(context) {
  const unique = context?.req?.cookies?.uat;
  const res = await request({ url: getUsersAPI, token: unique });
  const data = await res;
  return { props: data?.data };
}

export default AllUsers;
