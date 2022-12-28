import React, { useContext, useEffect } from 'react';
import { AlertCircle } from 'react-feather';
import UserContext from '../../Helper/UserContext';

const ErrorBox = ({ active }) => {
  const { setActive } = useContext(UserContext);
  useEffect(() => {
    setActive({ status: false });
  }, []);
  return (
    <div className={`error-box ${active?.status ? 'active' : ''}`}>
      <AlertCircle />
      <div>
        <h4>{active?.title}</h4>
      </div>
    </div>
  );
};

export default ErrorBox;
