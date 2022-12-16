import React from 'react';
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap';
import { CrossSells, Upsells } from '../../../Constant';

const LinkProduct = () => {
  return (
    <Card>
      <CardBody>
        <div className='card-header-2'>
          <h5>Link Products</h5>
        </div>

        <Row>
          <Row className='mb-4 align-items-center'>
            <Label className='form-label-title col-sm-2 mb-0'>{Upsells}</Label>
            <Col sm='10'>
              <Input className='form-control' type='search' />
            </Col>
          </Row>

          <Row className='align-items-center'>
            <Label className='form-label-title col-sm-2 mb-0'>{CrossSells}</Label>
            <Col sm='10'>
              <Input className='form-control' type='search' />
            </Col>
          </Row>
        </Row>
      </CardBody>
    </Card>
  );
};

export default LinkProduct;
