import React from 'react';
import LoginContain from '../Components/Login';

const Login = () => {
  return <LoginContain />;
};
Login.getLayout = function getLayout(Login) {
  return Login;
};
export default Login;
