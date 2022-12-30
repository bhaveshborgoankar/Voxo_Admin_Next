import React from 'react';
import ErrorHandle from './ErrorHandle';

const FormInput = (props) => {
  const { minnumber } = props.current
  return (
    <>
      <input {...props.current} {...props.current.register} />
      <ErrorHandle errors={props.errors} message={`${props.current.name} is required`} minnumber={minnumber ?? minnumber} />
    </>
  );
};

export default FormInput;
