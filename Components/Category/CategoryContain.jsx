import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { AllCategories } from '../../Constant';
import { categoryStatusAPI } from '../../Constant/APIRoutes';
import { CategoryColumn } from '../../Data/CategoryData';
import StatusCheckBox from '../CommonComponents/StatusCheckBox';
import TitleHeading from '../CommonComponents/TitleHeading';

const CategoryContain = ({ data }) => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCategoryData(data);
    }, 100);
    return () => clearTimeout(timer);
  }, [data]);
  return (
    <>
      <TitleHeading btn={true} title={AllCategories} redirectUrl={'/category/add'} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    {categoryData.length > 0 && (
                      <DataTable
                        data={categoryData.map((item, i) => ({
                          ...item,
                          Sr_No: i + 1,
                          image: <img className='mt-2 mb-2' src={`${process.env.API_URL}/${item.image}`} alt='Image' height={50} width={50} />,
                          activeStatus: <StatusCheckBox item={item} urlStatus={categoryStatusAPI} />,
                        }))}
                        columns={CategoryColumn}
                        pagination
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

export default CategoryContain;
