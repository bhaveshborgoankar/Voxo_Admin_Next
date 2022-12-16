import React from 'react';
import { Card, CardBody, Col, Container, Row, Table } from 'reactstrap';
import { OrderDetailsData } from '../../../Data/Orders';
import OrderDetailsHead from './OrderDetailsHead';
import OrderFooter from './OrderFooter';
import OrderSummary from './OrderSummary';
import TableHead from './TableHead';

const OrderDetails = () => {
  return (
    <>
      <OrderDetailsHead />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div className='bg-inner cart-section order-details-table'>
                  <Row className='g-4'>
                    <Col xl='8'>
                      <div className='table-responsive table-details'>
                        <Table className='cart-table table-borderless'>
                          <TableHead />
                          <tbody>
                            {OrderDetailsData.map((elem) => {
                              return (
                                <tr className='table-order' key={elem.id}>
                                  <td>
                                    <a href='#javascript'>
                                      <img src={elem.img} className='img-fluid' alt='' />
                                    </a>
                                  </td>
                                  <td>
                                    <p>{elem.head1}</p>
                                    <h5>{elem.Subhead1}</h5>
                                  </td>
                                  <td>
                                    <p>{elem.head2}</p>
                                    <h5>{elem.Subhead2}</h5>
                                  </td>
                                  <td>
                                    <p>{elem.head3}</p>
                                    <h5>{elem.Subhead3}</h5>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                          <OrderFooter />
                        </Table>
                      </div>
                    </Col>
                    <OrderSummary />
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderDetails;
