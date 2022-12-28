import React from 'react';
const ErrorHandle = ({ errors, message, minNumber }) => {
  return (
    <>
      {errors?.type === 'required' && <p style={{ color: 'red' }}>{message}</p>}
      {errors?.type === 'minLength' && <p style={{ color: 'red' }}>{`Minmum length required ${minNumber}`}</p>}
    </>
  );
};
export default ErrorHandle;
