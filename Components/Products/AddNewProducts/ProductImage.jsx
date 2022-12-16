import React from 'react';
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap';
import { Images, ProductImages, ThumbnailImage } from '../../../Constant';

const ProductImage = () => {
  return (
    <Card>
      <CardBody>
        <div className='card-header-2'>
          <h5>{ProductImages}</h5>
        </div>

        <Row>
          <Row className='mb-4 align-items-center'>
            <Label className='col-sm-2 col-form-label form-label-title'>{Images}</Label>
            <Col sm='10'>
              <Input className='form-control form-choose' type='file' id='formFileMultiple' />
            </Col>
          </Row>

          <Row className='align-items-center'>
            <Label className='col-sm-2 col-form-label form-label-title'>{ThumbnailImage}</Label>
            <Col sm='10'>
              <Input className='form-control form-choose' type='file' id='formFileMultiple1' />
            </Col>
          </Row>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProductImage;
