import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { AllTags } from '../../Constant';
import { tagStatusAPI } from '../../Constant/APIRoutes';
import { TagData } from '../../Data/TagData';
import { ModifyDate } from '../../Utils/ModifyDate';
import StatusCheckBox from '../CommonComponents/StatusCheckBox';
import TitleHeading from '../CommonComponents/TitleHeading';

const TagContain = ({ data }) => {
  const [tagData, setTagData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setTagData(data);
    }, 100);
    return () => clearTimeout(timer);
  }, [data]);
  return (
    <>
      <TitleHeading btn={true} title={AllTags} redirectUrl={'/tag/add'} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    {tagData.length > 0 && (
                      <DataTable
                        data={tagData.map((item, i) => ({
                          ...item,
                          Sr_No: i + 1,
                          created_at: ModifyDate(item.created_at),
                          activeStatus: <StatusCheckBox item={item} urlStatus={tagStatusAPI} />,
                        }))}
                        columns={TagData}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        onRowClicked={(row) => router.push(`/tag/edit/${row._id}`)}
                      />
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

export default TagContain;
