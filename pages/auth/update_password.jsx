import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Form, FormGroup, Label } from 'reactstrap';
import ErrorBox from '../../Components/CommonComponents/ErrorBox';
import { Confirm, ConfirmPasswords, Password, UpdatePasswords } from '../../Constant';
import { UpdatePasswordAPI } from '../../Constant/APIRoutes';
import UserContext from '../../Helper/UserContext';
import request from '../../Utils/APIService';
import { useForm } from 'react-hook-form';
import ErrorHandle from '../../Components/CommonComponents/ErrorHandle';
import SubmitButton from '../../Components/CommonComponents/SubmitButton';

const UpdatePassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setActive, active } = useContext(UserContext);
  const [isLoader, setIsLoader] = useState(false);
  const UpdatePasswordData = async (passwordValue) => {
    setIsLoader(true);
    if (passwordValue?.password === passwordValue?.confirm_password) {
      const updatedData = {
        password: passwordValue?.password,
        confirm_password: passwordValue?.confirm_password,
        email: Cookies.get('fpemail'),
        otp: Cookies.get('vo'),
      };
      const Res = await request({ url: UpdatePasswordAPI, method: 'POST', data: updatedData });

      if (Res.status === 200) {
        setIsLoader(false);
        Cookies.remove('fpemail'), Cookies.remove('vo'), setActive({ status: false });
        router.push('/auth/login');
      } else {
        setIsLoader(false);
        setActive({ status: true, title: Res?.data?.msg });
      }
    } else {
      setIsLoader(false);
      setActive({ status: true, title: 'Password not match!' });
    }
  };
  return (
    <div className='login-section'>
      <div className='materialContainer'>
        <ErrorBox active={active} />
        <div className='box'>
          <div className='login-title mb-4'>
            <h2>{UpdatePasswords}</h2>
          </div>
          <Form onSubmit={handleSubmit(UpdatePasswordData)}>
            <FormGroup floating>
              <input className='form-control' type='password' name='password' {...register('password', { required: true, minLength: 8 })} placeholder='Enter password' />
              <Label for='exampleEmail'>{Password}</Label>
              <ErrorHandle errors={errors.password} message={'Password is required'} minNumber={8} />
            </FormGroup>
            <FormGroup floating>
              <input className='form-control' type='password' name='confirm_password' {...register('confirm_password', { required: true, minLength: 8 })} placeholder='Enter Confirm Password' />
              <Label for='exampleEmail'>{ConfirmPasswords}</Label>
              <ErrorHandle errors={errors.password} message={'Confirm Password is required'} minNumber={8} />
            </FormGroup>
            <SubmitButton title={Confirm} isLoader={isLoader} />
          </Form>
        </div>
      </div>
    </div>
  );
};

UpdatePassword.getLayout = function getLayout(UpdatePassword) {
  return UpdatePassword;
};

export default UpdatePassword;
