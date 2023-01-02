import React, { useContext } from 'react';
import ErrorBox from '../../Components/CommonComponents/ErrorBox';
import { UpdatePasswords } from '../../Constant';
import UserContext from '../../Helper/UserContext';
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
