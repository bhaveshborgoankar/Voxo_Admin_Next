import React, { useState } from 'react';
import ProductContext from '.';

const ProductProvider = (props) => {
  const [categoryImage, setCategoryImage] = useState(false);
  return (
    <>
      <ProductContext.Provider value={{ ...props, categoryImage, setCategoryImage }}>{props.children}</ProductContext.Provider>;
    </>
  );
};

export default ProductProvider;
