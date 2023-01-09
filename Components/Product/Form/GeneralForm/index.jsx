import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Row } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { Next, ProductDiscount, ProductImages, ProductName, ProductPrice } from '../../../../Constant';
import DivideInput from '../../../CommonComponents/DivideInput';
import FormInputWrapper from '../../../CommonComponents/FormInputWrapper';

const GeneralForm = (props) => {
  const { setActiveTab, setData } = props;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onAddProduct = async (formData) => {
    if (formData) {
      setData(formData);
      setActiveTab(2);
    }
  };
  return (
    <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(onAddProduct)}>
      <Row>
        <FormInputWrapper title={ProductName} sm='9' labelClass={'form-label-title col-sm-3 mb-0'}>
          <DivideInput inputtype='input' className='form-control' name='name' type='text' placeholder='Product Name' register={{ ...register('name', { required: true }) }} errors={errors.name} />
        </FormInputWrapper>
        <FormInputWrapper title={ProductImages} sm='9' labelClass={'col-sm-3 col-form-label form-label-title'}>
          <DivideInput inputtype='input' className='form-control form-choose' type='file' />
        </FormInputWrapper>
        <FormInputWrapper title={ProductPrice} sm='9' labelClass={'col-sm-3 form-label-title'}>
          <DivideInput className='form-control' inputtype='input' name='price' type='number' register={{ ...register('price', { required: true }) }} errors={errors.price} placeholder='Enter price' />
        </FormInputWrapper>
        <FormInputWrapper title={ProductDiscount} sm='3' labelClass={'form-label-title col-sm-3 mb-0'}>
          <DivideInput
            inputtype='input'
            name='discount'
            placeholder='Enter product discount'
            className='form-control'
            control={control}
            type='number'
            register={{ ...register('discount', { required: true, min: 0, max: 99 }) }}
            errors={errors.discount}
          />
        </FormInputWrapper>
        <Row className='mb-4 align-items-center'>
          <Btn attrBtn={{ className: 'btn-primary mt-3 d-inline-block w-auto ms-auto', type: 'submit' }}>{Next}</Btn>
        </Row>
      </Row>
    </Form>
  );
};

export default GeneralForm;
