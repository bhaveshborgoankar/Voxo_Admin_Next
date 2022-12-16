import React from 'react'
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { OrderList } from '../../../Constant';
import { OrderListColumns, OrderListData } from '../../../Data/Orders';
import Pagination from '../../CommonComponents/Pagination';
import TitleHeading from '../../CommonComponents/TitleHeading';

const OrderListContain = () => {
    return (
      <>
        <TitleHeading title={OrderList} />
        <Container fluid={true}>
          <Row>
            <Col sm='12'>
              <Card>
                <CardBody>
                  <div>
                    <div className='table-responsive table-desi'>
                      <DataTable data={OrderListData} columns={OrderListColumns} />
                    </div>
                  </div>
                </CardBody>
                <Pagination />
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
}

export default OrderListContain