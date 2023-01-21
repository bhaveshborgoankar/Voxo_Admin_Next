import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useRouter } from 'next/router';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { AllProducts } from '../../Constant';
import StatusCheckBox from '../CommonComponents/StatusCheckBox';
import TitleHeading from '../CommonComponents/TitleHeading';
import { ProductColumns, ProductDemoData } from '../../Data/Products';
import { productStatusAPI } from '../../Constant/APIRoutes';
import { ModifyDate } from '../../Utils/ModifyDate';
const ProductContain = ({ data }) => {
  const [productData, setProductData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    let timer = setTimeout(() => {
      setProductData(ProductDemoData);
      // setProductData(data);
    }, 100);
    return () => clearTimeout(timer);
  }, [data]);
  return (
    <>
      <TitleHeading btn={true} title={AllProducts} redirectUrl={'/product/add'} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    {productData.length > 0 && (
                      <DataTable
                        data={productData.map((item, i) => ({
                          ...item,
                          Sr_No: i + 1,
                          image: <img className='mt-2 mb-2' src={`${process.env.API_URL}/${item.image}`} alt='Image' height={50} width={50} />,
                          created_at: ModifyDate('item.created_at'),
                          activeStatus: <StatusCheckBox item={item} urlStatus={productStatusAPI} />,
                        }))}
                        columns={ProductColumns}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        onRowClicked={(row) => router.push(`/product/edit/${row._id}`)}
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
export default ProductContain;
