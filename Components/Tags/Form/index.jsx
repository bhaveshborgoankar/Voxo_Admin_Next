import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
const TagForm = () => {
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

export default TagForm;
