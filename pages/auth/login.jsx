import React from 'react';
import LoginContain from '../../Components/Auth/Login/index';

const Login = () => {
  return <LoginContain />;
};
Login.getLayout = function getLayout(Login) {
  return Login;
};
export default Login;
