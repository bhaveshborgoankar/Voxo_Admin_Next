import React from 'react';
import BlogContain from '../../Components/Blog';

const Blog = () => {
  return <BlogContain />;
};

// API Code
// export async function getServerSideProps(context) {
//   const unique = context?.req?.cookies?.uat;
//   const res = await request({ url: getTagAPI, token: unique });
//   const { data } = await res;
//   return { props: data };
// }

export default Blog;
