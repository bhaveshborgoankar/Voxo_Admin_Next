import React from 'react';
import CategoryContain from '../../Components/Category/CategoryContain';
import { getCategoryAPI } from '../../Constant/APIRoutes';
import request from '../../Utils/APIService';

const Categories = ({ data }) => {
  if (!data) return null;
  return <CategoryContain data={data} />;
};

export async function getServerSideProps(context) {
  const unique = context?.req?.cookies?.uat;
  const res = await request({ url: getCategoryAPI, token: unique });
  const data = await res;
  return { props: data?.data };
}

export default Categories;
