import React from 'react';
import ErrorHandle from './ErrorHandle';

const FormInput = (props) => {
  return (
    <>
      <input {...props} {...props.register} />
      <ErrorHandle errors={props.errors} message={`${props.name} is required`} />
    </>
  );
};

export default FormInput;
