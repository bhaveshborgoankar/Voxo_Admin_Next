import React from 'react';
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap';

const ShippingData = () => {
  return (
    <Card>
      <CardBody>
        <div className='card-header-2'>
          <h5>Shipping</h5>
        </div>

        <Row>
          <Row className='mb-4 align-items-center'>
            <Label className='form-label-title col-sm-2 mb-0'>Weight (kg)</Label>
            <Col sm='10'>
              <Input className='form-control' type='number' placeholder='Weight' />
            </Col>
          </Row>

          <Row className='align-items-center'>
            <Label className='col-sm-2 col-form-label form-label-title'>Dimensions (cm)</Label>
            <Col sm='10'>
              <select className='js-example-basic-single w-100' name='state'>
                <option>Length</option>
                <option>Width</option>
                <option>Height</option>
              </select>
            </Col>
          </Row>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ShippingData;
