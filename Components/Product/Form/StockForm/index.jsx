import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { Prev, Submit } from '../../../../Constant';
import { StockStatusOption } from '../../../../Data/Products';
import DivideInput from '../../../CommonComponents/DivideInput';

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
      <div className='mb-4 row align-items-center'>
        <label className='col-sm-3 col-form-label form-label-title'>Stock Status</label>
        <div className='col-sm-9'>
          <div className='bs-example'>
            <DivideInput
              inputtype='select'
              name='stock'
              control={control}
              placeholder='Select the product stock status'
              register={{ ...register('stock', { required: true }) }}
              errors={errors.stock}
              options={StockStatusOption}
            />
          </div>
        </div>
      </div>
      <div className='mb-4 row align-items-center'>
        <label className='col-sm-3 col-form-label form-label-title'>Stock Quantity</label>
        <div className='col-sm-4'>
          <div className='bs-example'>
            <DivideInput
              inputtype='input'
              type='number'
              name='stock_quantity'
              className='form-control'
              placeholder='Select the stock quantity'
              register={{ ...register('stock_quantity', { required: true }) }}
              errors={errors.stock_quantity}
            />
          </div>
        </div>
      </div>

      <Col xs='12' className='text-end'>
        <Btn attrBtn={{ className: 'me-2 mt-3 d-inline-block w-auto ms-auto', type: 'button', onClick: () => setActiveTab(2) }}>{Prev}</Btn>
        <Btn attrBtn={{ className: 'btn-primary mt-3 d-inline-block w-auto', type: 'submit' }}>{Submit}</Btn>
      </Col>
    </Form>
  );
};

export default StockForm;
