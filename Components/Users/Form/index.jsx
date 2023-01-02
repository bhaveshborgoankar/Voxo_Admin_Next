import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import TitleHeading from '../../CommonComponents/TitleHeading';
import AccountTabData from './AccountTabData';
const AddNewUsersContains = (props) => {
  const { headTitle, data } = props;
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
                    <AccountTabData data={data} />
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
