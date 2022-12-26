import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Form } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import ErrorBox from '../../Components/CommonComponents/ErrorBox';
import { VerifyOTPAPI } from '../../Constant/APIRoutes';
import UserContext from '../../Helper/UserContext';
import request from '../../Utils/APIService';
import { useForm } from 'react-hook-form';
import { OTP, Verify } from '../../Constant';
import FormInput from '../../Components/CommonComponents/FormInput';
import FloatingInput from '../../Components/CommonComponents/FloatingInput';
import SubmitButton from '../../Components/CommonComponents/SubmitButton';

const VerifyOTP = () => {
  const router = useRouter();
  const { active, setActive } = useContext(UserContext);
  const [isLoader, setIsLoader] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onOtpSubmit = async (formData) => {
    setIsLoader(true);
    const updateData = {
      email: Cookies.get('fpemail'),
      otp: formData.otp,
    };
    const Res = await request({ url: VerifyOTPAPI, method: 'POST', data: updateData });
    if (Res.status === 200) {
      setIsLoader(false);
      setActive({ status: false });
      Cookies.set('vo', formData.otp);
      router.push('/auth/update_password');
    } else {
      setIsLoader(false);
      setActive({ status: true, title: Res?.data?.msg });
    }
  };
  return (
    <>
      <div className='login-section'>
        <div className='materialContainer'>
          <ErrorBox active={active} />
          <div className='box'>
            <div className='login-title mb-4'>
              <h2>{'Verify OTP'}</h2>
            </div>
            <Form onSubmit={handleSubmit(onOtpSubmit)}>
              <FloatingInput title={OTP}>
                <FormInput className='form-control' type='number' name='otp' errors={errors.otp} register={{ ...register('otp', { required: true }) }} placeholder='Enter OTP' />
              </FloatingInput>
              <SubmitButton title={Verify} isLoader={isLoader} />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

VerifyOTP.getLayout = function getLayout(VerifyOTP) {
  return VerifyOTP;
};

export default VerifyOTP;
