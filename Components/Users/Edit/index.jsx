import React, { useContext, useState } from 'react';
import { Card, CardBody, Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import { EditNewUser } from '../../../Constant';
import UserContext from '../../../Helper/UserContext';
import TitleHeading from '../../CommonComponents/TitleHeading';
import EditForm from './EditForm';
// import AccountTabData from './AccountTabData';
// import PermissionTabData from './PermissionTabData';
// import UserNav from './UserNav';

const EditUser = ({ data }) => {
  console.log('data', data);
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <TitleHeading title={EditNewUser} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <TabContent className='tab-content' activeTab={activeTab}>
                      <TabPane className={`fade ${activeTab === 1 ? 'show active' : ''}`}>
                        <EditForm data={data} />
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
export default EditUser;
