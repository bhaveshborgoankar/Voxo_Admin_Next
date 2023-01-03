import React from 'react';
import { Controller } from 'react-hook-form';
import SelectSearch from 'react-select-search';
import ErrorHandle from './ErrorHandle';

const FormSelect = (props) => {
  const { name, register, control, options } = props?.current;
  const { minnumber } = props?.current;
  const CapitalizeFirstName = props?.current?.name?.charAt(0).toUpperCase() + props?.current?.name?.slice(1);
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            <SelectSearch name={name} {...props?.current} options={options} {...register} onChange={(file) => field.onChange(file)} selected={field.value} />
            <ErrorHandle errors={props.errors} message={`${CapitalizeFirstName} is required`} minnumber={minnumber ?? minnumber} />
          </>
        )}
      />
    </>
  );
};

export default FormSelect;
