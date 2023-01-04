import axios from 'axios';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';

const client = axios.create({
  baseURL: process.env.API_URL,
  Headers: {
    Accept: 'application/json',
  },
});
const uat = Cookies?.get('uat');
const request = async ({ ...options }) => {
  if (!options.method) {
    client.defaults.headers.common.Authorization = `Bearer ${options.token}`;
  } else client.defaults.headers.common.Authorization = `Bearer ${uat}`;

  const onSuccess = (response) => {
    toast.success(response.data.msg, { autoClose: 1000 });
    return response;
  };

  const onError = (error) => {
    return error?.response;
  };

  return await client(options).then(onSuccess).catch(onError);
};

export default request;
