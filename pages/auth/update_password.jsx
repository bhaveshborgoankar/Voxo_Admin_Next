import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import ErrorBox from '../../Components/CommonComponents/ErrorBox';
import { ConfirmPasswords, Password, UpdatePasswords } from '../../Constant';
import { UpdatePasswordAPI } from '../../Constant/APIRoutes';
import UserContext from '../../Helper/UserContext';
import request from '../../Utils/APIService';

const UpdatePassword = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [UpdatePassword, setUpdatePassword] = useState();
  const { removeFpEmailCookie, removeVoCookie, setActive, active } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword === UpdatePassword) {
      const updatedData = {
        password: newPassword,
        confirm_password: UpdatePassword,
        email: Cookies.get('fpemail'),
        otp: Cookies.get('vo'),
      };
      const Res = await request({ url: UpdatePasswordAPI, method: 'POST', data: updatedData });

      if (Res.status === 200) {
        Cookies.remove('fpemail'), Cookies.remove('vo'), setActive({ status: false });
        router.push('/auth/login');
      } else setActive({ status: true, title: Res?.data?.msg });
    } else {
      setActive({ status: true, title: 'Something went wrong' });
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
          <Form onSubmit={(e) => handleSubmit(e)}>
            <FormGroup floating>
              <Input type='password' name='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter password' />
              <Label for='exampleEmail'>{Password}</Label>
            </FormGroup>
            <FormGroup floating>
              <Input type='password' name='confirm_password' value={UpdatePassword} onChange={(e) => setUpdatePassword(e.target.value)} placeholder='Enter Confirm Password' />
              <Label for='exampleEmail'>{ConfirmPasswords}</Label>
            </FormGroup>

            <div className='button login button-1'>
              <Btn attrBtn={{ type: 'submit' }}>
                <span>{'Confirm'}</span>
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
