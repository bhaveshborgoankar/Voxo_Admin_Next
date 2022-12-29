import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Col, Form, FormGroup, Label, Row } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Submit } from '../../../Constant';
import { createTagAPI, updateTagAPI } from '../../../Constant/APIRoutes';
import request from '../../../Utils/APIService';
import ErrorHandle from '../../CommonComponents/ErrorHandle';

const FormTag = ({ data }) => {
  const [activeStatus, setActiveStatus] = useState(data?.is_active ?? true);
  const hiddenType = 'product';
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: data?.name ?? '',
      type: data?.type ?? hiddenType,
      is_active: data?.is_active ?? true,
    },
  });
  const onAddTag = async (formData) => {
    const Res = await request({ url: createTagAPI, method: 'POST', data: formData });
    if (Res.status === 200) {
      router.push('/tag');
    }
  };
  const updateTag = async (formData) => {
    const Res = await request({ url: `${updateTagAPI}${data._id}`, method: 'PUT', data: formData });
    if (Res.status === 200) {
      router.push('/tag');
    }
  };
  return (
    <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(data ? updateTag : onAddTag)}>
      <Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>Tag Name*</Label>
          <Col md='9' lg='10'>
            <input className='form-control' type='text' name='name' {...register('name', { required: 'This field is required' })} />
            <ErrorHandle errors={errors.name} message={'Name is required'} />
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

        <Btn attrBtn={{ className: 'btn-theme theme-bg-color mt-3 d-inline-block w-auto', type: 'submit' }}>{Submit}</Btn>
      </Row>
    </Form>
  );
};

export default FormTag;
