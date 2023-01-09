import React from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import { TotalEarning } from '../../Data/Dashboard/TotalEarning';

const EarningCard = () => {
  return (
    <>
      {TotalEarning.map((elem) => {
        return (
          <Col sm='6' lg='6' className='col-xxl-3' key={elem.id}>
            <Card className={`b-b-${elem.classes} border-5 border-0 o-hidden`}>
              <CardBody className={`custome-${elem.id}-bg b-r-4`}>
                <Media className='align-items-center static-top-widget'>
                  <Media body className='p-0'>
                    <span className='m-0'>{elem.title}</span>
                    <h4 className='mb-0 counter'>
                      {elem.no}&nbsp;
                      <span className={`badge badge-light-${elem.classes} grow`}>
                        {elem.icon} {elem.persent}
                      </span>
                    </h4>
                  </Media>
                  <div className='align-self-center text-center'>{elem.icon2}</div>
                </Media>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default EarningCard;
