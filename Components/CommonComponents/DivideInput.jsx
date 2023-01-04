import React, { useRef } from 'react';
import FormImage from './FormImage';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const DivideInput = (props) => {
  const { inputtype, errors, reset, data } = props;
  const innerRefs = useRef({ ...props });

  return (
    <>
      {inputtype === 'input' && <FormInput {...innerRefs} errors={errors} />}
      {inputtype === 'select' && <FormSelect {...innerRefs} errors={errors} />}
      {inputtype === 'file' && <FormImage {...innerRefs} errors={errors} reset={reset} data={data} />}
    </>
  );
};
export default DivideInput;
