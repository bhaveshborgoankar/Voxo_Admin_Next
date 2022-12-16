import React from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Taxess } from '../../Constant';
import { TaxesDatas, TaxesHeading } from '../../Data/Localization/TaxesData';
import TitleHeading from '../CommonComponents/TitleHeading';
const TaxesContain = () => {
  return (
    <>
      <TitleHeading title={Taxess} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div className='table-responsive table-desi'>
                  <DataTable data={TaxesDatas} columns={TaxesHeading} className='user-table trans-table texes-table table table-striped' />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default TaxesContain;
