import axios from 'axios';
import { toast } from 'react-toastify';
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk0NTIxMDYyYTIwY2NlZDEwNWNiN2YiLCJpYXQiOjE2NzE2OTA3MDUsImV4cCI6MTY3MTc3NzEwNX0.bzJYavpExF08xgurWwqOCvyJPQGcEBYi8dCVnEPdWoo';

const client = axios.create({
  baseURL: process.env.API_URL,
  Headers: {
    Accept: 'application/json',
  },
});

const request = async ({ ...options }) => {
  console.log('options', options);
  client.defaults.headers.common.Authorization = `Bearer ${Token}`;

  const onSuccess = (response) => {
    toast.success(response?.data?.msg);
    return response;
  };

  const onError = (error) => {
    toast.error(error?.response?.data?.msg);
    return error?.response;
  };

  return await client(options).then(onSuccess).catch(onError);
};

export default request;
