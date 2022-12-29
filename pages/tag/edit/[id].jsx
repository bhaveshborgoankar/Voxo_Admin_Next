import React from 'react';
import TagForm from '../../../Components/Tags/Form';
import { UpdateTag } from '../../../Constant';
import { getSingleTagAPI } from '../../../Constant/APIRoutes';
import request from '../../../Utils/APIService';

const EditTag = ({ data }) => {
  if (!data) return null;
  return <TagForm data={data} headTitle={UpdateTag} />;
};

export async function getServerSideProps(context) {
  const { id } = context.query;
  const unique = context?.req?.cookies?.uat;
  const res = await request({ url: `${getSingleTagAPI}${id}`, token: unique });
  const data = res?.data;

  return { props: data };
}

export default EditTag;
