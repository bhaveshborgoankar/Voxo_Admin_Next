import React from 'react';
import { Col, Label, Row } from 'reactstrap';

const FormInputWrapper = (props) => {
  const { rowClass, labelClass, title, ...res } = props;
  return (
    <Row className={rowClass ? rowClass : 'mb-4 align-items-center'}>
      <Label className={labelClass ? labelClass : 'form-label-title col-lg-2 col-md-3 mb-0'}>{title}</Label>
      <Col {...res}>{props.children}</Col>
    </Row>
  );
};

export default FormInputWrapper;
