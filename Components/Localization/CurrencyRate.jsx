import React from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { CurrencyRates } from '../../Constant';
import { CurrencyRateColumns, CurrencyRateData } from '../../Data/Localization/CurrencyRateData';
import TitleHeading from '../CommonComponents/TitleHeading';
const CurrencyRate = () => {
  return (
    <>
      <TitleHeading title={CurrencyRates} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    <DataTable data={CurrencyRateData} columns={CurrencyRateColumns} />
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
export default CurrencyRate;
