import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FormGroup, Input } from 'reactstrap';
import request from '../../Utils/APIService';

const StatusCheckBox = (props) => {
  console.log('🚀 ~ file: StatusCheckBox.jsx:7 ~ StatusCheckBox ~ props', props.item);

  const { urlStatus, item } = props;
  const [isActive, setIsAvtive] = useState(item.is_active);

  const onStatusChange = async (e) => {
    setIsAvtive(e.target.checked);
    const Res = await request({ url: `${urlStatus}${item._id}/${e.target.checked}`, method: 'PUT' });
    if (Res.status === 200) {
      toast.success('Status is Update', { autoClose: 1000 });
    }
  };
  return (
    <FormGroup switch className='form-check form-switch'>
      <Input className='form-check-input' type='checkbox' onChange={(e) => onStatusChange(e)} checked={isActive} />
    </FormGroup>
  );
};

export default StatusCheckBox;
