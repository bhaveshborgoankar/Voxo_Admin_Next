import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { AddNewUser } from '../../../Constant';
import TitleHeading from '../../CommonComponents/TitleHeading';
import AccountTabData from './AccountTabData';
const AddNewUsersContains = () => {
  return (
    <>
      <TitleHeading title={AddNewUser} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <AccountTabData />
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
export default AddNewUsersContains;
