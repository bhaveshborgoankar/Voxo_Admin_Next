import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import Cookies from 'js-cookie';
import { Btn } from '../../AbstractElements';
import ErrorBox from '../../Components/CommonComponents/ErrorBox';
import { Email, ForgotPasswords, Send } from '../../Constant';
import { ForgotPasswordAPI } from '../../Constant/APIRoutes';
import UserContext from '../../Helper/UserContext';
import request from '../../Utils/APIService';

const ForgotPassword = () => {
  const router = useRouter();
  const { active, setActive } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email !== '') {
      const data = {
        email: email,
      };
      const Res = await request({ url: ForgotPasswordAPI, method: 'POST', data: data });
      if (Res.status === 200) {
        setActive({ status: false });
        Cookies.set('fpemail', email);
        setEmail('');
        router.push('/auth/verify_otp');
      } else setActive({ status: true, title: Res?.data?.msg });
    } else setActive({ status: true, title: 'Please enter the email' });
  };
  return (
    <div className='login-section'>
      <div className='materialContainer'>
        <ErrorBox active={active} />
        <div className='box'>
          <div className='login-title mb-5'>
            <h2>{ForgotPasswords}</h2>
          </div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <FormGroup floating>
              <Input id='exampleEmail' name='email' placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
              <Label for='exampleEmail'>{Email}</Label>
            </FormGroup>
            <div className='button login button-1'>
              <Btn attrBtn={{ type: 'submit' }}>
                <span>{Send}</span>
                <i className='fa fa-check'></i>
              </Btn>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

ForgotPassword.getLayout = function getLayout(ForgotPassword) {
  return ForgotPassword;
};
export default ForgotPassword;
