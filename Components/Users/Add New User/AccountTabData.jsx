import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import { createUserAPI } from '../../../Constant/APIRoutes';
import request from '../../../Utils/APIService';
import ErrorHandle from '../../CommonComponents/ErrorHandle';
import { ConfirmPassword, Country, EmailAddress, FirstName, Password, Phone, Submit } from '../../../Constant';
import { Btn } from '../../../AbstractElements';
import FormInput from '../../CommonComponents/FormInput';

const AccountTabData = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const addNewUser = async (formData) => {
    console.log('formData123', formData);
    if (formData) {
      const Res = await request({ url: createUserAPI, method: 'POST', data: formData });
      if (Res.status == 200) {
        toast.success('Product Added');
        router.push('/users');
      } else {
        toast.warning('Someting went wrong');
      }
      reset({ name: '', password: '', confirm_password: '', email: '', phone: '', country: '' });
    }
  };
  return (
    <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(addNewUser)}>
      <Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{FirstName}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='text' name='name' {...register('name', { required: true })} />
            <ErrorHandle errors={errors.name} message={'Name is required'} />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Password}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='password' name='password' {...register('password', { required: true, min: 8 })} />
            <ErrorHandle errors={errors.password} message={'Password is required'} />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{ConfirmPassword}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='password' name='confirm_password' {...register('confirm_password', { required: true, min: 8 })} />
            <ErrorHandle errors={errors.confirm_password} message={'confirm_password is required'} />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{EmailAddress}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='email' name='email' {...register('email', { required: true })} />
            <ErrorHandle errors={errors.email} message={'Email is required'} />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Phone}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='number' name='phone' {...register('phone', { required: true })} />
            <ErrorHandle errors={errors.phone} message={'Phone is required'} />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='col-lg-2 col-md-3 col-form-label form-label-title'>{Country}</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='text' name='country' {...register('country', { required: true })} />
            <ErrorHandle errors={errors.country} message={'Country is required'} />
          </Col>
        </Row>
        <Btn attrBtn={{ className: 'btn-theme theme-bg-color mt-3 d-inline-block w-auto', type: 'submit' }}>{Submit}</Btn>
      </Row>
    </Form>
  );
};

export default AccountTabData;
