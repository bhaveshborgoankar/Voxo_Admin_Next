import React from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { CreatedMenu } from '../../../Constant';
import TitleHeading from '../../CommonComponents/TitleHeading';
import CreateForm from './CreateForm';
const CreatedMenuContain = () => {
  return (
    <>
      <TitleHeading title={CreatedMenu} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <div className='tab-content' id='pills-tabContent'>
                      <CreateForm />
                    </div>
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
export default CreatedMenuContain;
