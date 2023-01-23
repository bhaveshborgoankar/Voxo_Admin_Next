import React from 'react';
import TagContain from '../../Components/Tags/TagContain';
import { getTagAPI } from '../../Constant/APIRoutes';
import request from '../../Utils/APIService';

const Tags = ({ data }) => {
  if (!data) return null;
  return <TagContain data={data} />;
};

export async function getServerSideProps(context) {
  const unique = context?.req?.cookies?.uat;
  const res = await request({ url: getTagAPI, token: unique });
  const data = await res;
  return { props: data?.data };
}

export default Tags;
