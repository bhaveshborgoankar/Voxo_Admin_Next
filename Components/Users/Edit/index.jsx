import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { EditNewUser } from '../../../Constant';
import TitleHeading from '../../CommonComponents/TitleHeading';
import EditForm from './EditForm';

const EditUser = ({ data }) => {
  return (
    <>
      <TitleHeading title={EditNewUser} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <EditForm data={data} />
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
export default EditUser;
