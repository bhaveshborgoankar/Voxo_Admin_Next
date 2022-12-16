import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import { AddNewUser } from '../../../Constant';
import TitleHeading from '../../CommonComponents/TitleHeading';
import AccountTabData from './AccountTabData';
import PermissionTabData from './PermissionTabData';
import UserNav from './UserNav';
const AddNewUsersContains = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <TitleHeading title={AddNewUser} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <UserNav setActiveTab={setActiveTab} activeTab={activeTab} />
                    <TabContent className='tab-content' activeTab={activeTab}>
                      <TabPane className={`fade ${activeTab === 1 ? 'show active' : ''}`}>
                        <AccountTabData />
                      </TabPane>

                      <TabPane className={`fade ${activeTab === 2 ? 'show active' : ''}`}>
                        <PermissionTabData />
                      </TabPane>
                    </TabContent>
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
export default AddNewUsersContains;
