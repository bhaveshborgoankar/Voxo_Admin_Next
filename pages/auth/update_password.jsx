import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Form, FormGroup, Label } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import ErrorBox from '../../Components/CommonComponents/ErrorBox';
import { Confirm, ConfirmPasswords, Password, UpdatePasswords } from '../../Constant';
import { UpdatePasswordAPI } from '../../Constant/APIRoutes';
import UserContext from '../../Helper/UserContext';
import request from '../../Utils/APIService';
import { useForm } from 'react-hook-form';
import ErrorHandle from '../../Components/CommonComponents/ErrorHandle';

const UpdatePassword = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setActive, active } = useContext(UserContext);

  const UpdatePasswordData = async (passwordValue) => {
    if (passwordValue?.password === passwordValue?.confirm_password) {
      const updatedData = {
        password: passwordValue?.password,
        confirm_password: passwordValue?.confirm_password,
        email: Cookies.get('fpemail'),
        otp: Cookies.get('vo'),
      };
      const Res = await request({ url: UpdatePasswordAPI, method: 'POST', data: updatedData });

      if (Res.status === 200) {
        Cookies.remove('fpemail'), Cookies.remove('vo'), setActive({ status: false });
        router.push('/auth/login');
      } else setActive({ status: true, title: Res?.data?.msg });
    } else {
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
              <input className='form-control' type='password' name='password' {...register('password', { required: true, min: 8 })} placeholder='Enter password' />
              <Label for='exampleEmail'>{Password}</Label>
              <ErrorHandle errors={errors.password} message={'Password is mandatory'} />
            </FormGroup>
            <FormGroup floating>
              <input className='form-control' type='password' name='confirm_password' {...register('confirm_password', { required: true, min: 8 })} placeholder='Enter Confirm Password' />
              <Label for='exampleEmail'>{ConfirmPasswords}</Label>
              <ErrorHandle errors={errors.password} message={'Confirm Password is mandatory'} />
            </FormGroup>

            <div className='button login button-1'>
              <Btn attrBtn={{ type: 'submit' }}>
                <span>{Confirm}</span>
                <i className='fa fa-check'></i>
              </Btn>
            </div>
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
