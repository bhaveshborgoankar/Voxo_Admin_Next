import React from 'react';
import { Card, CardBody, Col, Input, Label, Row } from 'reactstrap';
import { ProductVideos, VideoLink, VideoProvider } from '../../../Constant';

const ProductVideo = () => {
  return (
    <Card>
      <CardBody>
        <div className='card-header-2'>
          <h5>{ProductVideos}</h5>
        </div>

        <Row>
          <Row className='mb-4 align-items-center'>
            <Label className='col-sm-2 col-form-label form-label-title'>{VideoProvider}</Label>
            <Col sm='10'>
              <select className='js-example-basic-single w-100' name='state'>
                <option>Vimeo</option>
                <option>Youtube</option>
                <option>Dailymotion</option>
                <option>Vimeo</option>
              </select>
            </Col>
          </Row>

          <Row className='align-items-center'>
            <Label className='form-label-title col-sm-2 mb-0'>{VideoLink}</Label>
            <Col sm='10'>
              <Input className='form-control' type='text' placeholder='Video Link' />
            </Col>
          </Row>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProductVideo;
