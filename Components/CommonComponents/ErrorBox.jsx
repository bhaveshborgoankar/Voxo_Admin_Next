import React from 'react';
import { AlertCircle } from 'react-feather';

const ErrorBox = ({ active }) => {
  return (
    <div className={`error-box ${active.status ? 'active' : ''}`}>
      <AlertCircle />
      <div>
        <h4>{active.title}</h4>
      </div>
    </div>
  );
};

export default ErrorBox;
