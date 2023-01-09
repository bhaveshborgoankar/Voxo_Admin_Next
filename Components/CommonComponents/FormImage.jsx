import React, { useContext, useState } from 'react';
import { Plus, X } from 'react-feather';
import { Label } from 'reactstrap';
import ProductContext from '../../Helper/ProductContext';
import ErrorHandle from './ErrorHandle';

const FormImage = (props) => {
  const { minnumber, name, type } = props?.current;
  const { categoryImage, setCategoryImage } = useContext(ProductContext);
  const [imageUpdate, setImageUpdate] = useState('');
  const handleChange = (e) => {
    setImageUpdate(URL.createObjectURL(e.target.files[0]));
    setCategoryImage(URL.createObjectURL(e.target.files[0]));
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
        {categoryImage !== '' && (
          <li>
            <img src={imageUpdate ? imageUpdate : props.data ? `${process.env.API_URL}/${categoryImage}` : categoryImage} className='img-fluid' alt='Category image' />
            {!props.data && (
              <a
                href='#'
                className='remove-icon'
                onClick={(e) => {
                  e.preventDefault();
                  props.reset(name);
                  setImageUpdate('');
                  setCategoryImage('');
                }}>
                <X />
              </a>
            )}
          </li>
        )}
      </ul>
      <ErrorHandle errors={props.errors} message={`${CapitalizeFirstName} is required`} minnumber={minnumber ?? minnumber} />
    </>
  );
};

export default FormImage;
