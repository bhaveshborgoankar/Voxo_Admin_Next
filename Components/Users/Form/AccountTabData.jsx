import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, Label, Row } from 'reactstrap';
import { useRouter } from 'next/router';
import { createUserAPI, editUserAPI } from '../../../Constant/APIRoutes';
import request from '../../../Utils/APIService';
import { Back, EmailAddress, FirstName, Phone, Submit } from '../../../Constant';
import { Btn } from '../../../AbstractElements';
import DivideInput from '../../CommonComponents/DivideInput';
import UserPasswordField from './UserPasswordField';

const AccountTabData = ({ data }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: data?.name || '',
      email: data?.email || '',
      phone: data?.phone || '',
    },
  });
  const addNewUser = async (formData) => {
    if (formData) {
      const Res = await request({ url: createUserAPI, method: 'POST', data: formData });
      if (Res.status == 200) {
        reset();
        router.push('/user');
      }
    }
  };
  const editUser = async (formData) => {
    if (formData) {
      const editedData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };
      const Res = await request({ url: `${editUserAPI}/${data._id}`, method: 'PUT', data: editedData });
      if (Res.status === 200) {
        router.push('/user');
      }
    }
  };
  return (
    <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(data ? editUser : addNewUser)}>
      <Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{FirstName}*</Label>
          <Col md='9' lg='10'>
            <DivideInput inputtype='input' className='form-control' type='text' name='name' register={{ ...register('name', { required: true }) }} errors={errors.name} />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{EmailAddress}*</Label>
          <Col md='9' lg='10'>
            <DivideInput inputtype='input' className='form-control' type='email' name='email' register={{ ...register('email', { required: true }) }} errors={errors.email} />
          </Col>
        </Row>

        {!data && <UserPasswordField register={register} errors={errors} />}

        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Phone}*</Label>
          <Col md='9' lg='10'>
            <DivideInput
              inputtype='input'
              className='form-control'
              type='number'
              name='phone'
              register={{ ...register('phone', { required: true, minLength: 10 }) }}
              minnumber={10}
              errors={errors.phone}
            />
          </Col>
        </Row>
        <Btn attrBtn={{ className: 'mt-3 me-2 d-inline-block w-auto', type: 'button', onClick: () => router.back() }}>{Back}</Btn>
        <Btn attrBtn={{ className: 'btn-primary mt-3 d-inline-block w-auto', type: 'submit' }}>{Submit}</Btn>
      </Row>
    </Form>
  );
};
export default AccountTabData;
