import React, { useContext, useState } from 'react';
import { Card, CardBody, Col, Container, Form, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { AddNewProduct } from '../../../Constant';
import TitleHeading from '../../CommonComponents/TitleHeading';
import CommonHeader from './CommonHeader';
import DescriptionEditor from './DescriptionEditor';
import LinkProduct from './LinkProduct';
import ProductImage from './ProductImage';
import ProductInformation from './ProductInformation';
import ProductVideo from './ProductVideo';
import ShippingData from './ShippingData';
import CreateContextToggle from '../../../Helper/ToggleContext';
import { useNavigate } from 'react-router-dom';
const AddnewProductsContain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { setGetProducts } = useContext(CreateContextToggle);
  const onSubmit = (data) => {
    if (data !== '') {
      setGetProducts((prev) => ({ ...prev, ...data }));
      navigate('/products');
    } else {
      errors.showMessages();
    }
  };
  return (
    <>
      <TitleHeading title={AddNewProduct} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Form className='theme-form theme-form-2 mega-form' onSubmit={handleSubmit(onSubmit)}>
                  <Card>
                    <CardBody>
                      <CommonHeader title={'Product Information'} />
                      <ProductInformation register={register} errors={errors} />
                    </CardBody>
                  </Card>
                  <DescriptionEditor />
                  <ProductImage />
                  <ProductVideo />
                  <ShippingData />
                  <LinkProduct />
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddnewProductsContain;
