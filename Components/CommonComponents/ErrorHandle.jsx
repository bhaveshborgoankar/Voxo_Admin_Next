import React from 'react';
const ErrorHandle = ({ errors, message, minnumber }) => {
  return (
    <>
      {errors?.type === 'required' && <p style={{ color: 'red' }}>{message}</p>}
      {errors?.type === 'minLength' && <p style={{ color: 'red' }}>{`Minimum length required ${minnumber}`}</p>}
    </>
  );
};
export default ErrorHandle;
