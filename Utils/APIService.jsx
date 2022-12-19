import axios from 'axios';
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk0NTIxMDYyYTIwY2NlZDEwNWNiN2YiLCJpYXQiOjE2NzE0MjM0MDgsImV4cCI6MTY3MTUwOTgwOH0.icr2fLLkEQuTjcMUR1Y9TtABJIbELNFMlknIvyRLiRk';

const client = axios.create({
  baseURL: process.env.API_URL,
  Headers: {
    Accept: 'application/json',
  },
});

const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${Token}`;

  const onSuccess = (response) => response;

  const onError = (error) => {
    console.log('error axios-utils', error?.response);
    return error;
  };

  return await client(options).then(onSuccess).catch(onError);
};

export default request;
