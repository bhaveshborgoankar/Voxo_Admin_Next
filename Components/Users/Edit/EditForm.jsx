import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, Label, Row } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Country, EmailAddress, Name, Phone, Submit, UserInformation } from '../../../Constant';
import { editUserAPI } from '../../../Constant/APIRoutes';
import request from '../../../Utils/APIService';
const EditForm = ({ data }) => {
  console.log('data', data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      country: data?.country,
    },
  });
  const editUser = async (formData) => {
    console.log('formData', formData);
    if (formData) {
      const editedData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
      };
      const Res = await request({ url: `${editUserAPI}/${data._id}`, method: 'PUT', data: editedData });
      console.log('ResRes', Res);
    }
  };
  return (
    <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(editUser)}>
      <div className='card-header-1'>
        <h5>{UserInformation}</h5>
      </div>
      <Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Name}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='text' name='name' {...register('name', { required: true })} />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{EmailAddress}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='email' name='email' {...register('email', { required: true })} />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{Country}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='text' name='country' {...register('country', { required: true })} />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{Phone}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='text' name='phone' {...register('phone', { required: true })} />
          </Col>
        </Row>
        <Btn attrBtn={{ className: 'btn-theme theme-bg-color mt-3 d-inline-block w-auto', type: 'submit' }}>{Submit}</Btn>
      </Row>
    </Form>
  );
};
export default EditForm;
