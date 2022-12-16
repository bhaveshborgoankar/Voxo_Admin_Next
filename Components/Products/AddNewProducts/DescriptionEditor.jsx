import React from 'react';
import { Col, Label, Row } from 'reactstrap';
import { ProductDescription } from '../../../Constant';
import CKEditorContain from '../../Menus/CreateMenu/CKEditor';

const DescriptionEditor = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <div className='card-header-2'>
          <h5>Description</h5>
        </div>

        <Row>
          <Col xs='12'>
            <Row>
              <Label className='form-label-title col-sm-2 mb-0'>{ProductDescription}</Label>
              <Col sm='10'>
                <CKEditorContain />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DescriptionEditor;
