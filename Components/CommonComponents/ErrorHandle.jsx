import React from 'react';
const ErrorHandle = ({ errors, message }) => {
  return <>{errors && <p style={{ color: 'red' }}>{message}</p>}</>;
};
export default ErrorHandle;
