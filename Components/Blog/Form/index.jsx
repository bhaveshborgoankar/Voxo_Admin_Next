import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import TitleHeading from '../../CommonComponents/TitleHeading';
import FormBlog from './FormContain';

const BlogForm = ({ headTitle }) => {
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
                    <FormBlog />
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

export default BlogForm;
