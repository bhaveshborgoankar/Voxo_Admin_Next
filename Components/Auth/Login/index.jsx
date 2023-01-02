import React, { useContext } from 'react';
import UserContext from '../../../Helper/UserContext';
import ErrorBox from '../../CommonComponents/ErrorBox';
import LoginForm from './LoginForm';

const LoginContain = () => {
  const { active } = useContext(UserContext);
  return (
    <div className='box-wrapper'>
      <div className='login-section'>
        <div className='materialContainer'>
          <ErrorBox active={active} />
          <div className='box'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContain;
