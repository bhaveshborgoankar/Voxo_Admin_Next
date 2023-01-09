import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Row } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Back, Status, Submit, TagName } from '../../../Constant';
import { createTagAPI, updateTagAPI } from '../../../Constant/APIRoutes';
import request from '../../../Utils/APIService';
import DivideInput from '../../CommonComponents/DivideInput';
import FormInputWrapper from '../../CommonComponents/FormInputWrapper';

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
        <FormInputWrapper title={TagName} md='9' lg='10'>
          <DivideInput inputtype='input' className='form-control' type='text' name='name' register={{ ...register('name', { required: true }) }} errors={errors.name} placeholder='Enter Tag Name' />
        </FormInputWrapper>
        <FormInputWrapper title={Status} md='9' lg='10'>
          <FormGroup switch className='form-check form-switch'>
            <input className='form-check-input' type='checkbox' onChange={() => setActiveStatus(activeStatus)} defaultChecked={activeStatus} name='is_active' {...register('is_active')} />
          </FormGroup>
        </FormInputWrapper>
        <Btn attrBtn={{ className: 'mt-3 me-2 d-inline-block w-auto', type: 'button', onClick: () => router.push('/tag') }}>{Back}</Btn>
        <Btn attrBtn={{ className: 'btn-primary mt-3 d-inline-block w-auto', type: 'submit' }}>{Submit}</Btn>
      </Row>
    </Form>
  );
};

export default FormTag;
