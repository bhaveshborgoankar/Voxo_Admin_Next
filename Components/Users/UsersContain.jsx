import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { AllUserss } from '../../Constant';
import { userStatusAPI } from '../../Constant/APIRoutes';
import { AllUserColumn } from '../../Data/Users/AllUser';
import { ModifyDate } from '../../Utils/ModifyDate';
import DataNotFound from '../CommonComponents/DataNotFound';
import StatusCheckBox from '../CommonComponents/StatusCheckBox';
import TitleHeading from '../CommonComponents/TitleHeading';

const UsersContain = ({ data }) => {
  const router = useRouter();
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
                    {userData.length > 0 ? (
                      <DataTable
                        data={userData.map((item, i) => ({
                          ...item,
                          Sr_No: i + 1,
                          created_at: ModifyDate(item.created_at),
                          activeStatus: <StatusCheckBox item={item} urlStatus={userStatusAPI} />,
                        }))}
                        columns={AllUserColumn}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        onRowClicked={(row) => router.push(`/user/edit/${row._id}`)}
                      />
                    ) : (
                      <DataNotFound />
                    )}
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

export default UsersContain;
