import React from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { MenuList } from '../../../Constant';
import { AllMenuData, AllMenuList } from '../../../Data/AllMenu';
import TitleHeading from '../../CommonComponents/TitleHeading';
const MenuListContain = () => {
  return (
    <>
      <TitleHeading title={MenuList} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    <DataTable columns={AllMenuList} data={AllMenuData} selectableRows pagination className='user-table menu-list-table table table-striped' />
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
export default MenuListContain;
