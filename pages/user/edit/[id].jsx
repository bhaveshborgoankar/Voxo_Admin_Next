import React from 'react';
import request from '../../../Utils/APIService';
import { getSingleUserAPI } from '../../../Constant/APIRoutes';
import AddNewUsersContains from '../../../Components/Users/Form';
import { EditNewUser } from '../../../Constant';

const UserEdit = ({ data }) => {
  if (!data) return null;
  return <AddNewUsersContains headTitle={EditNewUser} data={data} />;
  // return <EditUser data={data} />;
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const unique = context?.req?.cookies?.uat;
  const res = await request({ url: `${getSingleUserAPI}${id}`, token: unique });
  const data = res?.data;

  return { props: data };
}

export default UserEdit;
