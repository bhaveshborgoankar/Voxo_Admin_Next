import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Row } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Back, Image, Name, Status, Submit } from '../../../Constant';
import { createCategoryAPI, updateCategoryAPI } from '../../../Constant/APIRoutes';
import ProductContext from '../../../Helper/ProductContext';
import request from '../../../Utils/APIService';
import DivideInput from '../../CommonComponents/DivideInput';
import FormInputWrapper from '../../CommonComponents/FormInputWrapper';
const FormCategory = ({ data }) => {
  useEffect(() => {
    !data && setCategoryImage('');
  }, [data]);
  const [activeStatus, setActiveStatus] = useState(data?.is_active ?? true);
  const { setCategoryImage } = useContext(ProductContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: data?.name ?? '',
      is_active: data?.is_active ?? true,
      image: data ? setCategoryImage(data.image) : '',
    },
  });
  const addNewCategory = async (formData) => {
    let form_Data = new FormData();
    form_Data.append('name', formData.name);
    form_Data.append('image', formData.image[0]);
    form_Data.append('is_active', formData.is_active);

    if (formData) {
      const Res = await request({ url: createCategoryAPI, method: 'POST', data: form_Data, headers: { 'content-type': 'multipart/form-data' } });
      if (Res.status == 200) {
        resetField(formData.name);
        router.push('/category');
      }
    }
  };
  const UpdateCategoryForm = async (formData) => {
    let form_Data = new FormData();
    form_Data.append('name', formData.name);
    form_Data.append('is_active', formData.is_active);
    if (formData.image) {
      form_Data.append('image', formData.image[0]);
      setCategoryImage(formData.image[0]);
    }
    if (formData) {
      const Res = await request({ url: `${updateCategoryAPI}${data?._id}`, method: 'PUT', data: form_Data, headers: { 'content-type': 'multipart/form-data' } });
      if (Res.status == 200) {
        router.push('/category');
      }
    }
  };

  return (
    <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(data ? UpdateCategoryForm : addNewCategory)}>
      <Row>
        <FormInputWrapper title={Name} md='9' lg='10'>
          <DivideInput inputtype='input' className='form-control' type='text' name='name' register={{ ...register('name', { required: true }) }} errors={errors.name} />
        </FormInputWrapper>
        <FormInputWrapper title={Image} md='9' lg='10'>
          <DivideInput inputtype='file' type='file' data={data} register={{ ...register('image', { required: data ? false : true }) }} name='image' errors={errors.image} reset={resetField} />
        </FormInputWrapper>
        <FormInputWrapper title={Status} md='9' lg='10'>
          <FormGroup switch className='form-check form-switch'>
            <input className='form-check-input' type='checkbox' onChange={() => setActiveStatus(activeStatus)} defaultChecked={activeStatus} name='is_active' {...register('is_active')} />
          </FormGroup>
        </FormInputWrapper>
        <Btn attrBtn={{ className: 'mt-3 me-2 d-inline-block w-auto', type: 'button', onClick: () => router.push('/category') }}>{Back}</Btn>
        <Btn attrBtn={{ className: 'btn-primary mt-3 d-inline-block w-auto', type: 'submit' }}>{Submit}</Btn>
      </Row>
    </Form>
  );
};
export default FormCategory;
