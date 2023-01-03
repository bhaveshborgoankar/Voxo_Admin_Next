import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import NavTab from './NavTab';
import GeneralForm from './GeneralForm';
import TypeForm from './TypeForm';
import StockForm from './StockForm';

const AddProductContain = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [data, setData] = useState();
  console.log('datadatadata', data);
  return (
    <Container fluid={true}>
      <Row>
        <Col xs='12'>
          <Card>
            <CardBody>
              <NavTab setActiveTab={setActiveTab} activeTab={activeTab} />

              <TabContent activeTab={activeTab}>
                <TabPane className={`${activeTab === 1 ? 'show active' : ''}`}>
                  <GeneralForm setData={setData} setActiveTab={setActiveTab} />
                </TabPane>

                <TabPane className={`${activeTab === 2 ? 'show active' : ''}`}>
                  <TypeForm setData={setData} data={data} setActiveTab={setActiveTab} />
                </TabPane>

                <TabPane className={`${activeTab === 3 ? 'show active' : ''}`}>
                  <StockForm setData={setData} data={data} setActiveTab={setActiveTab} />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProductContain;
