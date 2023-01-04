import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, Label, Row } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { Next } from '../../../../Constant';
import DivideInput from '../../../CommonComponents/DivideInput';

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
        <div className='mb-4 row align-items-center'>
          <Label className='form-label-title col-sm-3 mb-0'>Product Name</Label>
          <Col sm='9'>
            <DivideInput inputtype='input' className='form-control' name='name' type='text' placeholder='Product Name' register={{ ...register('name', { required: true }) }} errors={errors.name} />
          </Col>
        </div>
        <div className='mb-4 row align-items-center'>
          <Label className='col-sm-3 col-form-label form-label-title'>Product Image</Label>
          <Col sm='9'>
            <DivideInput inputtype='input' className='form-control form-choose' type='file' />
            {/* <input className='form-control form-choose' type='file' id='formFile' multiple /> */}
          </Col>
        </div>
        <div className='mb-4 row align-items-center'>
          <label className='col-sm-3 form-label-title'>Product Price</label>
          <div className='col-sm-9'>
            <DivideInput
              className='form-control'
              inputtype='input'
              name='price'
              type='number'
              register={{ ...register('price', { required: true }) }}
              errors={errors.price}
              placeholder='Enter price'
            />
          </div>
        </div>
        <div className='mb-4 row align-items-center'>
          <label className='form-label-title col-sm-3 mb-0'>Product Discount</label>
          <div className='col-sm-3'>
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
          </div>
        </div>
        <div className='mb-4 row align-items-center'>
          <Label className='col-sm-3 col-form-label form-label-title'>Description</Label>
          <Col sm='9'>
            <div className='bs-example'>
              <DivideInput
                inputtype='input'
                name='description'
                register={{ ...register('description', { required: true }) }}
                type='textArea'
                className='form-control'
                placeholder='Enter Description'
                errors={errors.description}
              />
            </div>
          </Col>
        </div>
        <div className='mb-4 row align-items-center'>
          <Btn attrBtn={{ className: 'btn-primary mt-3 d-inline-block w-auto ms-auto', type: 'submit' }}>{Next}</Btn>
        </div>
      </Row>
    </Form>
  );
};

export default GeneralForm;
