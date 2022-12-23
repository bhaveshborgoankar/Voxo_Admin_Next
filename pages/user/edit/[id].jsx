import React from 'react';
import EditUser from '../../../Components/Users/Edit';
import request from '../../../Utils/APIService';
import { getSingleUserAPI } from '../../../Constant/APIRoutes';

const UserEdit = ({ data }) => {
  return <EditUser data={data} />;
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const unique = context?.req?.cookies?.uat;
  const res = await request({ url: `${getSingleUserAPI}${id}`, token: unique });
  const data = res?.data;

  return { props: data };
}

export default UserEdit;
