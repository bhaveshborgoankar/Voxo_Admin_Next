import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { Prev, StockQuantity, StockStatus, Submit } from '../../../../Constant';
import { StockStatusOption } from '../../../../Data/Products';
import DivideInput from '../../../CommonComponents/DivideInput';
import FormInputWrapper from '../../../CommonComponents/FormInputWrapper';

const StockForm = (props) => {
  const { setData, setActiveTab, data } = props;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onStockForm = async (formData) => {
    setData({ ...data, ...formData });
  };
  return (
    <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(onStockForm)}>
      <FormInputWrapper sm='9' title={StockStatus} labelClass={'col-sm-3 col-form-label form-label-title'}>
        <DivideInput
          inputtype='select'
          name='stock'
          control={control}
          placeholder='Select the product stock status'
          register={{ ...register('stock', { required: true }) }}
          errors={errors.stock}
          options={StockStatusOption}
        />
      </FormInputWrapper>
      <FormInputWrapper sm='4' title={StockQuantity} labelClass='col-sm-3 col-form-label form-label-title'>
        <DivideInput
          inputtype='input'
          type='number'
          name='stock_quantity'
          className='form-control'
          placeholder='Select the stock quantity'
          register={{ ...register('stock_quantity', { required: true }) }}
          errors={errors.stock_quantity}
        />
      </FormInputWrapper>

      <Col xs='12' className='text-end'>
        <Btn attrBtn={{ className: 'me-2 mt-3 d-inline-block w-auto ms-auto', type: 'button', onClick: () => setActiveTab(2) }}>{Prev}</Btn>
        <Btn attrBtn={{ className: 'btn-primary mt-3 d-inline-block w-auto', type: 'submit' }}>{Submit}</Btn>
      </Col>
    </Form>
  );
};

export default StockForm;
