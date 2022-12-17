import React from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Input, Row } from 'reactstrap';
import { AllUserss } from '../../../Constant';
import { AllUserColumn, AllUserData } from '../../../Data/Users/AllUser';
import Pagination from '../../CommonComponents/Pagination';
import TitleHeading from '../../CommonComponents/TitleHeading';
const AllUsers = ({ data }) => {
  return (
    <>
      <TitleHeading btn={true} title={AllUserss} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    <DataTable
                      data={
                        data
                          ? data.map((elem) => ({
                              ...elem,
                              created_at: elem.created_at.split('T')[0],
                              is_deleted: (
                                <div className='form-check form-switch'>
                                  <Input className='form-check-input' type='checkbox' defaultChecked={elem.is_deleted} id='flexSwitchCheckDefault' />
                                </div>
                              ),
                            }))
                          : 'Please add data'
                      }
                      columns={AllUserColumn}
                    />
                    {/* <DataTable data={data.map((item) => ({ ...item, user: <img src={item.image} /> }))} columns={AllUserColumn} /> */}
                    {/* <DataTable data={AllUserData} columns={AllUserColumn} selectableRows pagination /> */}
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
};
export default AllUsers;
