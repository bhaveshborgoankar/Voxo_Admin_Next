import React, { useContext, useState } from 'react';
import { Plus, X } from 'react-feather';
import { Label } from 'reactstrap';
import ErrorHandle from './ErrorHandle';

const FormImage = (props) => {
  const { minnumber, name, type } = props?.current;
  console.log("Main props",props,"name",name);
  const [imageUpdate, setImageUpdate] = useState(props.data ? `${process.env.API_URL}/${props.data.image}` : '');
  const handleChange = (e) => {
    setImageUpdate(URL.createObjectURL(e.target.files[0]));
  };
  const CapitalizeFirstName = props?.current?.name?.charAt(0).toUpperCase() + props?.current?.name?.slice(1);
  return (
    <>
      <ul className='image-select-list'>
        <li className='choosefile-input'>
          <input name={name} type={type} {...props.current.register} onChange={(e) => handleChange(e)} />
          <Label>
            <Plus />
          </Label>
        </li>
        {imageUpdate !== '' && (
            <li>
              <img src={imageUpdate} className='img-fluid' alt='Category image' />
                <a
                  href='#'
                  className='remove-icon'
                  onClick={(e) => {
                    e.preventDefault();
                    props.reset(name);
                    setImageUpdate('');
                  }}>
                  <X />
                </a>
            </li>
          )}
      </ul>
      <ErrorHandle errors={props.errors} message={`${CapitalizeFirstName} is required`} minnumber={minnumber ?? minnumber} />
    </>
  );
};

export default FormImage;
