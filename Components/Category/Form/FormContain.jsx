import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Col, Form, FormGroup, Label, Row } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Back, Image, Name, Submit } from '../../../Constant';
import { createCategoryAPI, updateCategoryAPI } from '../../../Constant/APIRoutes';
import ProductContext from '../../../Helper/ProductContext';
import request from '../../../Utils/APIService';
import DivideInput from '../../CommonComponents/DivideInput';
const FormCategory = ({ data }) => {
  console.log('🚀 ~ file: FormContain.jsx:12 ~ FormCategory ~ data', data);
  const [activeStatus, setActiveStatus] = useState(data?.is_active ?? true);
  const { categoryImage, setCategoryImage } = useContext(ProductContext);
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
      image: data ? setCategoryImage(data.image) : categoryImage,
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
        toast.success('Category Added');
        reset({ name: '' });
        router.push('/category');
      } else {
        toast.warning('Someting went wrong');
      }
    }
  };

  const UpdateCategoryForm = async (formData) => {
    let form_Data = new FormData();
    form_Data.append('name', formData.name);
    formData.image && form_Data.append('image', formData.image[0]);
    form_Data.append('is_active', formData.is_active);

    if (formData) {
      const Res = await request({ url: `${updateCategoryAPI}${data?._id}`, method: 'PUT', data: form_Data, headers: { 'content-type': 'multipart/form-data' } });
      if (Res.status == 200) {
        toast.success('Category Added');
        // reset({ name: '' });
        router.push('/category');
      } else {
        toast.warning('Someting went wrong');
      }
    }
  };

  return (
    <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(data ? UpdateCategoryForm : addNewCategory)}>
      <Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Name}</Label>
          <Col md='9' lg='10'>
            <DivideInput inputtype='input' className='form-control' type='text' name='name' register={{ ...register('name', { required: true }) }} errors={errors.name} />
          </Col>
        </Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Image}</Label>
          <Col md='9' lg='10'>
            <DivideInput inputtype='file' type='file' data={data} register={{ ...register('image', { required: true }) }} name='image' errors={errors.image} reset={resetField} />
          </Col>
        </Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>Status:</Label>
          <Col md='9' lg='10'>
            <FormGroup switch className='form-check form-switch'>
              <input className='form-check-input' type='checkbox' onChange={() => setActiveStatus(activeStatus)} defaultChecked={activeStatus} name='is_active' {...register('is_active')} />
            </FormGroup>
          </Col>
        </Row>
        <Btn attrBtn={{ className: 'mt-3 me-2 d-inline-block w-auto', type: 'button', onClick: () => router.back() }}>{Back}</Btn>
        <Btn attrBtn={{ className: 'btn-primary mt-3 d-inline-block w-auto', type: 'submit' }}>{Submit}</Btn>
      </Row>
    </Form>
  );
};
export default FormCategory;
