import React from 'react';
import { Card, CardBody, CardFooter, Col, Container, Row } from 'reactstrap';
import { Cancel, OrderTracking, Submit } from '../../../Constant';
import { Btn } from '../../../AbstractElements';
import TitleHeading from '../../CommonComponents/TitleHeading';
import OrderTimelines from './OrderTimelines';
import OrderProfile from './OrderProfile';
import PreviousData from './PreviousData';

const OrderTraching = () => {
  return (
    <>
      <TitleHeading title={OrderTracking} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <Row>
                      <OrderProfile />
                      <OrderTimelines />
                      <PreviousData />
                    </Row>
                  </CardBody>
                  <CardFooter className='text-end border-0 pt-0'>
                    <Btn attrBtn={{ className: 'btn btn-primary me-3' }}>{Submit}</Btn>
                    <Btn attrBtn={{ className: 'btn btn-outline-primary' }}>{Cancel}</Btn>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderTraching;
