import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Row } from 'reactstrap';
import { Btn } from '../../../AbstractElements';
import { Back, Content, Description, MetaData, Name, SelectCategories, Status, Submit, Title } from '../../../Constant';
import { SelectCategoriesOptions } from '../../../Data/BlogData';
import DivideInput from '../../CommonComponents/DivideInput';
import FormInputWrapper from '../../CommonComponents/FormInputWrapper';
const FormBlog = () => {
  const [activeStatus, setActiveStatus] = useState(true);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  return (
    <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit()}>
      <Row>
        <FormInputWrapper title={Title} md='9' lg='10'>
          <DivideInput inputtype='input' className='form-control' type='text' name='title' register={{ ...register('title', { required: true }) }} errors={errors.title} />
        </FormInputWrapper>

        <FormInputWrapper title={Name} md='9' lg='10'>
          <DivideInput inputtype='input' className='form-control' type='text' name='name' register={{ ...register('name', { required: true }) }} errors={errors.name} />
        </FormInputWrapper>

        <FormInputWrapper title={Description} md='9' lg='10'>
          <DivideInput inputtype='input' className='form-control' type='text' name='description' register={{ ...register('description', { required: true }) }} errors={errors.description} />
        </FormInputWrapper>

        <FormInputWrapper title={Content} md='9' lg='10'>
          <DivideInput inputtype='input' className='form-control' type='text' name='content' register={{ ...register('content', { required: true }) }} errors={errors.content} />
        </FormInputWrapper>

        <FormInputWrapper title={MetaData} md='9' lg='10'>
          <DivideInput inputtype='input' className='form-control' type='text' name='metaData' register={{ ...register('metaData', { required: true }) }} errors={errors.metaData} />
        </FormInputWrapper>

        <FormInputWrapper title={SelectCategories} md='9' lg='10'>
            <DivideInput
              inputtype='select'
              type='text'
              control={control}
              name='selectCategories'
              register={{ ...register('selectCategories', { required: true }) }}
              errors={errors.selectCategories}
              options={SelectCategoriesOptions}
            />
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
export default FormBlog;
