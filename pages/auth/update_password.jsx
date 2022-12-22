import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { Form, Input } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { UpdatePasswordAPI } from '../../Constant/APIRoutes';
import UserContext from '../../Helper/UserContext';
import request from '../../Utils/APIService';

const UpdatePassword = () => {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [UpdatePassword, setUpdatePassword] = useState();
  const { fpEmailCookie, removeFpEmailCookie, voCookie, removeVoCookie } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword === UpdatePassword) {
      const updatedData = {
        password: newPassword,
        confirm_password: UpdatePassword,
        email: fpEmailCookie?.fpemail,
        otp: voCookie?.vo,
      };
      const Res = await request({ url: UpdatePasswordAPI, method: 'POST', data: updatedData });

      if (Res.status === 200) {
        removeFpEmailCookie('fpemail');
        removeVoCookie('vo');
        router.push('/auth/login');
      }
    } else {
      alert('Password not matched!');
    }
  };
  return (
    <div className='login-section'>
      <div className='materialContainer'>
        <div className='box'>
          <div className='login-title'>
            <h2>{'Update Password'}</h2>
          </div>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <div className='input'>
              <Input type='password' name='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder='Enter password' />
            </div>
            <div className='input'>
              <Input type='password' name='password' value={UpdatePassword} onChange={(e) => setUpdatePassword(e.target.value)} placeholder='Enter Confirm Password' />
            </div>

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
