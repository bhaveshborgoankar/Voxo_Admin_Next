import React, { useRef } from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const DivideInput = (props) => {
  const { inputtype, errors } = props;
  const innerRefs = useRef({ ...props });

  return (
    <>
      {inputtype === 'input' && <FormInput {...innerRefs} errors={errors} />}
      {inputtype === 'select' && <FormSelect {...innerRefs} errors={errors} />}
    </>
  );
};
export default DivideInput;
