import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Input, Row } from 'reactstrap';
import { AllUserss } from '../../../Constant';
import { AllUserColumn } from '../../../Data/Users/AllUser';
import Pagination from '../../CommonComponents/Pagination';
import TitleHeading from '../../CommonComponents/TitleHeading';
const AllUsers = ({ data }) => {
  const [userData, setUserdata] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setUserdata(data);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
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
                    {userData.length > 0 && (
                      <DataTable
                        data={userData.map((item, i) => ({
                          ...item,
                          Sr_No: i + 1,
                          created_at: item.created_at.split('T')[0],
                          activeStatus: (
                            <div className='form-check form-switch'>
                              <Input className='form-check-input' type='checkbox' />
                            </div>
                          ),
                        }))}
                        columns={AllUserColumn}
                        pagination
                      />
                    )}
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
