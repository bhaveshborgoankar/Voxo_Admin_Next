import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import request from '../../Utils/APIService';
import { Btn } from '../../AbstractElements';
import { LoginAPI } from '../../Constant/APIRoutes';
import { Email, Forgotyourpassword, LogIn, Logins, Password, Pleasefillthename } from '../../Constant';
import UserContext from '../../Helper/UserContext';

const LoginContain = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const { setUat } = useContext(UserContext);
  const [password, setPassword] = useState('');
  // const [cookies, setCookie] = useCookies(['uat']);

  const loginAuth = async (event, email, password) => {
    event.preventDefault();
    if (email !== '' && password !== '') {
      const data = {
        email: email,
        password: password,
      };
      var Res = await request({ url: LoginAPI, method: 'POST', data: data });
      if (Res?.status == 200) {
        router.push('/');
        setUat('uat', Res?.data?.token);
      }
    } else {
      console.log('Please add data first');
    }
  };
  return (
    <>
      <div className='box-wrapper'>
        <div className='error-box'>
          {/* <Icon name="clarity:error-standard-line" color="red" /> */}
          <div>
            <h4>{`{$t(heading)}`}</h4>
            <p>{`{$t(message)}`}</p>
          </div>
        </div>
        <div className='login-section'>
          <div className='materialContainer'>
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
      {/* <div class="error-box">
        <Icon name="clarity:error-standard-line" color="red" />
      <div>
        <h4>{{$t(heading)}}</h4>
        <p>{{$t(message)}}</p>
      </div>
    </div> */}
    </>
  );
};

export default LoginContain;
