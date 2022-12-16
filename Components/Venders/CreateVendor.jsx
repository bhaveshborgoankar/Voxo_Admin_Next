import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import { CreateVendor } from '../../Constant';
import TitleHeading from '../CommonComponents/TitleHeading';
import PermissionTabData from '../Users/Add New User/PermissionTabData';
import UserNav from '../Users/Add New User/UserNav';
import VendorAccount from './VenderAccount';
const CreateVender = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <div className='title-header'>
        <h5>{CreateVendor}</h5>
      </div>
      <TitleHeading />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <UserNav setActiveTab={setActiveTab} activeTab={activeTab} />

                <TabContent activeTab={activeTab}>
                  <TabPane className={`fade ${activeTab === 1 ? 'show active' : ''}`}>
                    <VendorAccount />
                  </TabPane>
                  <TabPane className={`fade ${activeTab === 2 ? 'show active' : ''}`}>
                    <PermissionTabData />
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CreateVender;
