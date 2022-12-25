import React, { useContext } from 'react';
import ErrorHandle from './ErrorHandle';

const FormInput = (props) => {
  console.log("props", props.name)
  return <>
    <input {...props} {...props.register} />
    <ErrorHandle errors={props.errors} message={`${props.name} is required`} />
  </>
};

export default FormInput;
