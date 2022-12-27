import { useRouter } from 'next/router';
import React from 'react';
import CategoryForm from '../../../Components/Category/Form';
import { UpdateCategoryss } from '../../../Constant';
import { getSingleCategory } from '../../../Constant/APIRoutes';
import request from '../../../Utils/APIService';

const UpdateCategory = ({ data }) => {
  const router = useRouter();
  if (!data) return null;
  return <CategoryForm headTitle={UpdateCategoryss} data={data} />;
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const unique = context?.req?.cookies?.uat;
  const res = await request({ url: `${getSingleCategory}${id}`, token: unique });
  const data = res?.data;

  return { props: data };
}

export default UpdateCategory;
