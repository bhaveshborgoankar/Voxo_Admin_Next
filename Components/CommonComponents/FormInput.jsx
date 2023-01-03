import React from 'react';
import ErrorHandle from './ErrorHandle';

const FormInput = (props) => {
  const { minnumber } = props.current;
  const CapitalizeFirstName = props?.current?.name?.charAt(0).toUpperCase() + props?.current?.name?.slice(1);
  return (
    <>
      <input {...props.current} {...props.current.register} />
      <ErrorHandle errors={props.errors} message={`${CapitalizeFirstName} is required`} minnumber={minnumber ?? minnumber} />
    </>
  );
};

export default FormInput;
