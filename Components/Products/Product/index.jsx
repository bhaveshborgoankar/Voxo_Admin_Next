import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { ProductsList } from '../../../Constant';
import { ProductListData, ProductsColumns } from '../../../Data/Products';
import CreateContextToggle from '../../../Helper/ToggleContext';
import TitleHeading from '../../CommonComponents/TitleHeading';
const Products = () => {
  const { getProducts } = useContext(CreateContextToggle);
  const [allData, setAllData] = useState(ProductListData);
  useEffect(() => {
    getProducts.productname && setAllData((prev) => [...prev, getProducts]);
  }, [getProducts]);

  return (
    <>
      <TitleHeading title={ProductsList} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi table-product'>
                    <DataTable columns={ProductsColumns} data={allData} />
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
export default Products;
