import React from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { TranslationList } from '../../Constant';
import { TranslationData, TranslationListHead } from '../../Data/Localization';
import TitleHeading from '../CommonComponents/TitleHeading';

const Translation = () => {
  return (
    <>
      <TitleHeading title={TranslationList} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div className='table-responsive table-desi'>
                  <DataTable data={TranslationData} columns={TranslationListHead} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Translation;
