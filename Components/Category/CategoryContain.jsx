import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Input, Row } from 'reactstrap';
import { AllCategories } from '../../Constant';
import { CategoryColumn } from '../../Data/CategoryData';
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
                          image: <img src={item.image} alt='Image' />,
                          activeStatus: (
                            <div className='form-check form-switch'>
                              <Input className='form-check-input' type='checkbox' />
                            </div>
                          ),
                        }))}
                        columns={CategoryColumn}
                        pagination
                      />
                    )}
                  </div>
                </div>
              </CardBody>
              {/* <Pagination /> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryContain;
