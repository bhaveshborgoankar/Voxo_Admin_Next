import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, Label } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import { Category, Next, Prev } from '../../../../Constant';
import { BrandOption, CategoryOption, ProductColorOption } from '../../../../Data/Products';
import DivideInput from '../../../CommonComponents/DivideInput';

const TypeForm = (props) => {
  const { setActiveTab, setData, data } = props;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onTypeForm = async (formData) => {
    setActiveTab(3);
    setData({ ...data, ...formData });
  };
  return (
    <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(onTypeForm)}>
      <div className='mb-4 row align-items-center'>
        <Label className='col-sm-3 col-form-label form-label-title'>{Category}</Label>
        <Col sm='9'>
          <DivideInput
            inputtype='select'
            name='category'
            control={control}
            placeholder='Select category'
            register={{ ...register('category', { required: true }) }}
            errors={errors.category}
            options={CategoryOption}
          />
        </Col>
      </div>
      <div className='mb-4 row align-items-center'>
        <Label className='col-sm-3 col-form-label form-label-title'>Brand</Label>
        <Col sm='9'>
          <DivideInput
            inputtype='select'
            name='brand'
            control={control}
            placeholder='Select brand'
            register={{ ...register('brand', { required: true }) }}
            errors={errors.brand}
            options={BrandOption}
          />
        </Col>
      </div>

      <div className='mb-4 row align-items-center'>
        <label className='col-sm-3 form-label-title'>Product Color</label>
        <div className='col-sm-9'>
          <DivideInput
            inputtype='select'
            name='color'
            control={control}
            placeholder='Select the product color'
            register={{ ...register('color', { required: true }) }}
            errors={errors.color}
            options={ProductColorOption}
          />
        </div>
      </div>
      <div className='mb-4 row align-items-center'>
        <Label className='col-sm-3 col-form-label form-label-title'>Tags</Label>
        <Col sm='9'>
          <div className='bs-example'>
            <DivideInput inputtype='input' name='tags' register={{ ...register('tags', { required: true }) }} type='text' className='form-control' placeholder='Enter Tags' errors={errors.tags} />
          </div>
        </Col>
      </div>
      <Col xs='12' className='text-end'>
        <Btn attrBtn={{ className: 'me-2 mt-3 d-inline-block w-auto ms-auto', type: 'button', onClick: () => setActiveTab(1) }}>{Prev}</Btn>
        <Btn attrBtn={{ className: 'btn-primary mt-3 d-inline-block w-auto', type: 'submit' }}>{Next}</Btn>
      </Col>
    </Form>
  );
};

export default TypeForm;
