import React, { useState } from 'react';
import { Card, CardBody, Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import { CreateCoupon } from '../../../Constant';
import TitleHeading from '../../CommonComponents/TitleHeading';
import CouponNavs from './CouponNavs';
import GeneralForm from './GeneralForm';
import RestrictionForm from './RestrictionForm';
import UsageForm from './UsageForm';
const CreateCouponContain = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <TitleHeading title={CreateCoupon} />
      <Container fluid={true}>
        <Row>
          <Col xs='12'>
            <Row>
              <Col sm='12'>
                <Card>
                  <CardBody>
                    <CouponNavs setActive={setActive} active={active} />
                    <TabContent activeTab={active}>
                      <TabPane className={`${active === 1 ? 'show active' : ''}`}>
                        <GeneralForm />
                      </TabPane>
                      <TabPane className={`${active === 2 ? 'show active' : ''}`}>
                        <RestrictionForm />
                      </TabPane>
                      <TabPane className={`${active === 3 ? 'show active' : ''}`}>
                        <UsageForm />
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
export default CreateCouponContain;
