import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import TitleHeading from '../../CommonComponents/TitleHeading';
import FormCategory from './FormContain';

const CategoryForm = ({ headTitle, data }) => {
  return (
    <>
      <TitleHeading title={headTitle} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <FormCategory data={data} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryForm;
