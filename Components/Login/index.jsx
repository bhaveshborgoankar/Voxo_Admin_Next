import React, { useState } from 'react';
import Link from 'next/link';
import { useCookies } from 'react-cookie';
import { FormGroup, Input, Label } from 'reactstrap';
import request from '../../Utils/APIService';
import { Btn } from '../../AbstractElements';
import { LoginAPI } from '../../Constant/APIRoutes';
import { Email, Forgotyourpassword, LogIn, Logins, Password, Pleasefillthename } from '../../Constant';

const LoginContain = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['uat']);

  const loginAuth = async (email, password) => {
    if (email !== '' && password !== '') {
      const data = {
        email: email,
        password: password,
      };
      var Res = await request({ url: LoginAPI, method: 'POST', data: data });
      setCookie('uat', Res.data.token);
    } else {
      console.log('Please add data first');
    }
  };
  return (
    <div className='login-section'>
      <div className='materialContainer'>
        <div className='box'>
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
          <Link href={`/forgot_password`} className='pass-forgot'>
            {Forgotyourpassword}
          </Link>
          <div className='button login'>
            <Btn attrBtn={{ onClick: () => loginAuth(email, password) }}>
              <span>{LogIn}</span>
              <i className='fa fa-check'></i>
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContain;
