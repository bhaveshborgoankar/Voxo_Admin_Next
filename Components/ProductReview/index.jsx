import React from 'react';
import DataTable from 'react-data-table-component';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { ProductReviews } from '../../Constant';
import { ProductReviewData, ProductReviewHeader } from '../../Data/ProductTableData';
import TitleHeading from '../CommonComponents/TitleHeading';
const ProductReviewContain = () => {
  return (
    <>
      <TitleHeading title={ProductReviews} />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                <div>
                  <div className='table-responsive table-desi'>
                    <DataTable columns={ProductReviewHeader} data={ProductReviewData} />
                    {/* <table class='user-table ticket-table review-table table table-striped'>
                      <thead>
                        <tr>
                          <th>No.</th>
                          <th>Customer Name</th>
                          <th>Product Name</th>
                          <th>Rating</th>
                          <th>Comment</th>
                          <th>Published</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>01</td>
                          <td>Maureen Biologist</td>
                          <td>Outwear & Coats</td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-check'>
                            <span class='lnr lnr-checkmark-circle'></span>
                          </td>
                        </tr>

                        <tr>
                          <td>02</td>
                          <td>Caroline Harris</td>
                          <td>Slim Fit Plastic Coat</td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-check'>
                            <span class='lnr lnr-checkmark-circle'></span>
                          </td>
                        </tr>

                        <tr>
                          <td>03</td>
                          <td>Lucy Morile</td>
                          <td>Men's Sweatshirt</td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-check'>
                            <span class='lnr lnr-checkmark-circle'></span>
                          </td>
                        </tr>

                        <tr>
                          <td>04</td>
                          <td>Jennifer Straight</td>
                          <td>Men's Hoodie t-shirt</td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-cross'>
                            <span class='lnr lnr-cross-circle'></span>
                          </td>
                        </tr>

                        <tr>
                          <td>05</td>
                          <td>Kevin Millett</td>
                          <td>Outwear & Coats</td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-check'>
                            <span class='lnr lnr-checkmark-circle'></span>
                          </td>
                        </tr>

                        <tr>
                          <td>06</td>
                          <td>czxc</td>
                          <td>Slim Fit Plastic Coat</td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-cross'>
                            <span class='lnr lnr-cross-circle'></span>
                          </td>
                        </tr>

                        <tr>
                          <td>07</td>
                          <td>Kevin Millett</td>
                          <td>Men's Sweatshirt</td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-cross'>
                            <span class='lnr lnr-cross-circle'></span>
                          </td>
                        </tr>

                        <tr>
                          <td>08</td>
                          <td>Dillon Bradshaw</td>
                          <td>Men's Hoodie t-shirt</td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-check'>
                            <span class='lnr lnr-checkmark-circle'></span>
                          </td>
                        </tr>

                        <tr>
                          <td>09</td>
                          <td>Lorna Bonner</td>
                          <td>Outwear & Coats</td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-cross'>
                            <span class='lnr lnr-cross-circle'></span>
                          </td>
                        </tr>

                        <tr>
                          <td>10</td>
                          <td>Richard Johnson</td>
                          <td>Slim Fit Plastic Coat </td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-check'>
                            <span class='lnr lnr-checkmark-circle'></span>
                          </td>
                        </tr>

                        <tr>
                          <td>11</td>
                          <td>Lorraine McDowell</td>
                          <td>Men's Sweatshirt</td>
                          <td>
                            <ul class='rating'>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star theme-color'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                              <li>
                                <i class='fas fa-star'></i>
                              </li>
                            </ul>
                          </td>
                          <td>The Product is No Longer Needed</td>
                          <td class='td-check'>
                            <span class='lnr lnr-checkmark-circle'></span>
                          </td>
                        </tr>
                      </tbody>
                    </table> */}
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
export default ProductReviewContain;
