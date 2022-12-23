import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import request from '../../Utils/APIService';
import { Btn } from '../../AbstractElements';
import { LoginAPI } from '../../Constant/APIRoutes';
import { Email, Forgotyourpassword, LogIn, Logins, Password, Pleasefillthename } from '../../Constant';
import UserContext from '../../Helper/UserContext';
import ErrorBox from '../CommonComponents/ErrorBox';

const LoginContain = () => {
  const router = useRouter();
  const { uat, setUat, active, setActive } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log('setUat', setUat, 'uat', uat);
  const loginAuth = async (event, email, password) => {
    event.preventDefault();
    if (email !== '' && password !== '') {
      const data = {
        email: email,
        password: password,
      };
      var Res = await request({ url: LoginAPI, method: 'POST', data: data });
      if (Res?.status == 200) {
        Cookies.set('uat', Res?.data?.token);
        // setUat('uat', Res?.data?.token);
        setActive({ status: false });
        router.push('/');
        console.log('Res123456789', Res);
      } else setActive({ status: true, title: Res?.data?.msg });
    } else {
      console.log('Please add data first');
    }
  };
  return (
    <>
      <div className='box-wrapper'>
        <div className='login-section'>
          <div className='materialContainer'>
            <ErrorBox title={'d'} subTitle={'dddd'} active={active} />
            <div className='box'>
              <Form onSubmit={(e) => loginAuth(e, email, password)}>
                <div className='login-title mb-5'>
                  <h2>{Logins}</h2>
                </div>
                <FormGroup floating>
                  <Input id='exampleEmail' name='email' placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
                  <Label for='exampleEmail'>{Email}</Label>
                </FormGroup>
                <div className='valid-feedback'>{Pleasefillthename}</div>
                <FormGroup floating>
                  <Input id='exampleEmail' name='password' placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)} />
                  <Label for='exampleEmail'>{Password}</Label>
                </FormGroup>
                <Link href={`/auth/forgot_password`} className='pass-forgot'>
                  {Forgotyourpassword}
                </Link>
                <div className='button login'>
                  <Btn attrBtn={{ type: 'submit' }}>
                    <span>{LogIn}</span>
                    <i className='fa fa-check'></i>
                  </Btn>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginContain;
