import React, { useMemo } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { VendorList } from '../../Constant';
import { venderListData, venderListHeadingData } from '../../Data/Venders';
import TitleHeading from '../CommonComponents/TitleHeading';

const Venderlist = () => {
  const memoVenderListHeadingColumn = useMemo(() => venderListHeadingData, []);
  const memoVenderListHeadingData = useMemo(() => venderListData, []);
  return (
    <>
      <TitleHeading title={VendorList} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div className='table-responsive table-desi'>
                  <DataTable columns={memoVenderListHeadingColumn} data={memoVenderListHeadingData} pagination selectableRows />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Venderlist;
