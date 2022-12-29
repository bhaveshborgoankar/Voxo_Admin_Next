import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from 'reactstrap';
import { Email, ForgotPasswords, Send } from '../../../Constant';
import { ForgotPasswordAPI } from '../../../Constant/APIRoutes';
import UserContext from '../../../Helper/UserContext';
import request from '../../../Utils/APIService';
import DivideInput from '../../CommonComponents/DivideInput';
import FloatingInput from '../../CommonComponents/FloatingInput';
import FormInput from '../../CommonComponents/FormInput';
import SubmitButton from '../../CommonComponents/SubmitButton';

const ForgotPasswordContain = () => {
  const router = useRouter();
  const { setActive } = useContext(UserContext);
  const [isLoader, setIsLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onForgotPassword = async (formData) => {
    setIsLoader(true);
    if (formData) {
      const data = { email: formData.Email };
      const Res = await request({ url: ForgotPasswordAPI, method: 'POST', data: data });

      if (Res.status === 200) {
        setActive({ status: false });
        Cookies.set('fpemail', formData.Email);
        setIsLoader(false);
        router.push('/auth/verify_otp');
      } else {
        setActive({ status: true, title: Res?.data?.msg });
        setIsLoader(false);
      }
    }
  };
  return (
    <div className='box'>
      <div className='login-title mb-5'>
        <h2>{ForgotPasswords}</h2>
      </div>
      <Form onSubmit={handleSubmit(onForgotPassword)}>
        <FloatingInput title={Email}>
          <DivideInput inputtype='input' className='form-control' name='Email' placeholder='Email' type='email' errors={errors.Email} register={{ ...register('Email', { required: true }) }} />
        </FloatingInput>
        <SubmitButton title={Send} isLoader={isLoader} />
      </Form>
    </div>
  );
};

export default ForgotPasswordContain;
