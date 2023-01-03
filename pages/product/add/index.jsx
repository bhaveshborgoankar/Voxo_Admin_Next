import React from 'react';
import TitleHeading from '../../../Components/CommonComponents/TitleHeading';
import AddProductContain from '../../../Components/Product/Form';
import { AddNewProduct } from '../../../Constant';

const AddProduct = () => {
  return (
    <>
      <TitleHeading title={AddNewProduct} />
      <AddProductContain />
    </>
  );
};

export default AddProduct;
