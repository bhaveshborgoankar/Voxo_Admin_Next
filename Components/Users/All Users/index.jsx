import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Input, Row } from 'reactstrap';
import { AllUserss } from '../../../Constant';
import { userStatusAPI } from '../../../Constant/APIRoutes';
import { AllUserColumn } from '../../../Data/Users/AllUser';
import Pagination from '../../CommonComponents/Pagination';
import StatusCheckBox from '../../CommonComponents/StatusCheckBox';
import TitleHeading from '../../CommonComponents/TitleHeading';
const AllUsers = ({ data }) => {
  const [userData, setUserdata] = useState('');
  useEffect(() => {
    const timeout = setTimeout(() => {
      setUserdata(data);
    }, 100);
    return () => clearTimeout(timeout);
  }, [data]);
  return (
    <>
      <TitleHeading btn={true} title={AllUserss} redirectUrl={'/user/add'} />
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
                          activeStatus: <StatusCheckBox item={item} urlStatus={userStatusAPI} />,
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
