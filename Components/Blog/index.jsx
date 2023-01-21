import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useRouter } from 'next/router';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import TitleHeading from '../CommonComponents/TitleHeading';
import StatusCheckBox from '../CommonComponents/StatusCheckBox';
import { AllBlogs } from '../../Constant';
import { BlogData } from '../../Data/BlogData';
import { blogStatusAPI } from '../../Constant/APIRoutes';
const BlogContain = ({ data }) => {
  const [blogData, setBlogData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    let timer = setTimeout(() => {
      setBlogData(data);
    }, 100);
    return () => clearTimeout(timer);
  }, [data]);
  return (
    <>
      <TitleHeading btn={true} title={AllBlogs} redirectUrl={'/blog/add'} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    {blogData.length > 0 && (
                      <DataTable
                        data={blogData.map((item, i) => ({
                          ...item,
                          Sr_No: i + 1,
                          image: <img className='mt-2 mb-2' src={`${process.env.API_URL}/${item.image}`} alt='Blog Image' height={50} width={50} />,
                          activeStatus: <StatusCheckBox item={item} urlStatus={blogStatusAPI} />,
                        }))}
                        columns={BlogData}
                        pagination
                        highlightOnHover
                        pointerOnHover
                        onRowClicked={(row) => router.push(`/blog/edit/${row._id}`)}
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

export default BlogContain;
