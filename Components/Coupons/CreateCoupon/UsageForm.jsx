import React from 'react';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import { PerCustomer, PerLimited, UsageLimits } from '../../../Constant';

const UsageForm = () => {
  return (
    <Form className='theme-form theme-form-2 mega-form'>
      <div className='card-header-1'>
        <h5>{UsageLimits}</h5>
      </div>

      <Row>
        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{PerLimited}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='number' />
          </Col>
        </Row>

        <Row className='align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{PerCustomer}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='number' />
          </Col>
        </Row>
      </Row>
    </Form>
  );
};

export default UsageForm;
