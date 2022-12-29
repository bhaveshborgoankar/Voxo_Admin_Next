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
import UpdatePasswordContain from '../../Components/Auth/UpdatePassword';

const UpdatePassword = () => {
  const { active } = useContext(UserContext);
  return (
    <div className='login-section'>
      <div className='materialContainer'>
        <ErrorBox active={active} />
        <div className='box'>
          <div className='login-title mb-4'>
            <h2>{UpdatePasswords}</h2>
          </div>
          <UpdatePasswordContain />
        </div>
      </div>
    </div>
  );
};

UpdatePassword.getLayout = function getLayout(UpdatePassword) {
  return UpdatePassword;
};

export default UpdatePassword;
