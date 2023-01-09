import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { BrowserStates, CommonPath } from '../../Constant';
import { BrowserStatusData } from '../../Data/Dashboard/TotalEarning';
import SectionHeader from '../CommonComponents/SectionHeader';

const BrowserStatusCard = () => {
  return (
    <Col md='6' className='col-xxl-4'>
      <Card className='o-hidden card-hover'>
        <SectionHeader customeClass={'border-0'} value={BrowserStates} />
        <CardBody className='pt-0'>
          <ul className='brower-states'>
            {BrowserStatusData.map((elem) => (
              <li className='brower-item' key={elem.id}>
                <div className='browser-image'>
                  <img src={`${CommonPath}${elem.images}`} className='img-fluid' alt='browser image' />
                  <h5>{elem.title}</h5>
                </div>

                <div className='browser-progressbar'>
                  <h6>{elem.persent}</h6>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BrowserStatusCard;
