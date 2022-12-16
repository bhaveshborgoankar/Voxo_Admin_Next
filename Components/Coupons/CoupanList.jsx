import React from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Couponlist } from '../../Constant';
import { CouponListColumn, CouponListData } from '../../Data/CouponListData';
import TitleHeading from '../CommonComponents/TitleHeading';
const CouponList = () => {
  return (
    <>
      <TitleHeading title={Couponlist} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    <DataTable className='user-table coupon-list-table table table-striped' data={CouponListData} columns={CouponListColumn} selectableRows />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CouponList;
