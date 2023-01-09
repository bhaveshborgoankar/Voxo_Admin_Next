import React from 'react';
import TitleHeading from '../../../Components/CommonComponents/TitleHeading';
import AddProductContain from '../../../Components/Product/Form';
import { EditProductTitle } from '../../../Constant';

const EditProduct = () => {
  return (
    <>
      <TitleHeading title={EditProductTitle} />
      <AddProductContain />
    </>
  );
};

export default EditProduct;
