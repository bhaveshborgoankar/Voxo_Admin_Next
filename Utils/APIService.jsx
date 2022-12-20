import axios from 'axios';
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk0NTIxMDYyYTIwY2NlZDEwNWNiN2YiLCJpYXQiOjE2NzE1MTEwMDUsImV4cCI6MTY3MTU5NzQwNX0.vDt00VGRw4Oak809x6gx4Q3a0pwZ_Cct9pwhXvtRAlY';

const client = axios.create({
  baseURL: process.env.API_URL,
  Headers: {
    Accept: 'application/json',
  },
});

const request = async ({ ...options }) => {
  console.log('options', options);
  client.defaults.headers.common.Authorization = `Bearer ${Token}`;

  const onSuccess = (response) => response;

  const onError = (error) => {
    console.log('error axios-utils', error?.response);
    return error?.response;
  };

  return await client(options).then(onSuccess).catch(onError);
};

export default request;
