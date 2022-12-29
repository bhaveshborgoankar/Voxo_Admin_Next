import React from 'react';
import ErrorHandle from './ErrorHandle';

const FormInput = (props) => {
  const { minnumber } = props
  return (
    <>
      <input {...props} {...props.register} />
      <ErrorHandle errors={props.errors} message={`${props.name} is required`} minnumber={minnumber ?? minnumber} />
    </>
  );
};

export default FormInput;
