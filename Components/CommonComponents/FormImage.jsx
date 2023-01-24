import React, { useState } from 'react';
import { useContext } from 'react';
import { Plus, X } from 'react-feather';
import { Label } from 'reactstrap';
import ProductContext from '../../Helper/ProductContext';
import ErrorHandle from './ErrorHandle';

const FormImage = (props) => {
  const { minnumber } = props?.current;
  const [imageUpdate, setImageUpdate] = useState(props?.data?.image ? `${process.env.API_URL}/${props.data.image}` : '');
  const { categoryImage, setCategoryImage } = useContext(ProductContext);
  const handleChange = (e) => {
    setImageUpdate(URL.createObjectURL(e.target.files[0]));
    props.setValue('image', URL.createObjectURL(e.target.files[0]), { shouldValidate: true });
  };
  const CapitalizeFirstName = props?.current?.name?.charAt(0).toUpperCase() + props?.current?.name?.slice(1);
  console.log('props.getValues', props.getValues('image'));
  return (
    <>
      <ul className='image-select-list'>
        <li className='choosefile-input'>
          <input {...props.current} {...props.current.register} onChange={(e) => handleChange(e)} />
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
                setImageUpdate('');
                setCategoryImage(true);
                // props.reset('image');
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
