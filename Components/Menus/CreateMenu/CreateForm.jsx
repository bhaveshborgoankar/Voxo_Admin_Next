import React, { useEffect, useState } from 'react';
import { Col, Form, Input, Label, Row } from 'reactstrap';
import SelectSearch from 'react-select-search';
import CKEditorContain from './CKEditor';
import { MenuName, Description, Access, Status, PermanentLink, EnabletheMenu } from '../../../Constant/index';
const CreateForm = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, [show]);
  const options = [
    { name: 'Public', value: 'Public' },
    { name: 'Private', value: 'Private' },
  ];
  return (
    <Form className='theme-form theme-form-2 mega-form'>
      <Row>
        <Row className='mb-3 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{MenuName}</Label>
          <Col md='9' lg='10'>
            <Input className='form-control' type='text' />
          </Col>
        </Row>

        <Row className='mb-3'>
          <Label className='form-label-title col-sm-2 mb-0'>{Description}</Label>
          <Col sm='10'>
            <CKEditorContain />
          </Col>
        </Row>

        <Row className='mb-3 align-items-center'>
          <Label className='col-sm-2 col-form-label form-label-title'>{Access}</Label>
          <Col sm='10'>
            <SelectSearch className='select-search' options={options} search={true} name='Access' placeholder='Choose your Access' />
          </Col>
        </Row>

        <Row className='mb-3 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{PermanentLink}</Label>
          <Col md='9' lg='10' className='col-md-9 col-lg-10'>
            <Input className='form-control' type='url' />
          </Col>
        </Row>

        <Row className='mb-4 align-items-center'>
          <Label className='form-label-title col-lg-2 col-md-3 mb-0'>{Status}</Label>
          <Col md='9'>
            <div className='form-check user-checkbox ps-0'>
              <Input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault' />
              <Label className='form-label-title col-md-2 mb-0'>{EnabletheMenu}</Label>
            </div>
          </Col>
        </Row>
      </Row>
    </Form>
  );
};
export default CreateForm;
