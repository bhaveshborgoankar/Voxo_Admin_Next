import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_URL,
  Headers: {
    Accept: 'application/json',
  },
});

const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${options.token}`;

  const onSuccess = (response) => {
    return response;
  };

  const onError = (error) => {
    return error?.response;
  };

  return await client(options).then(onSuccess).catch(onError);
};

export default request;
