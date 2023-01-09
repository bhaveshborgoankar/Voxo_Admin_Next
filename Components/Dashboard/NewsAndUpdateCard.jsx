import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { NewUpdate } from '../../Constant';
import { NewUpdateData } from '../../Data/Dashboard/TotalEarning';
import SectionHeader from '../CommonComponents/SectionHeader';

const NewsAndUpdateCard = () => {
  return (
    <Col md='6' className='col-xxl-4'>
      <Card className='o-hidden card-hover'>
        <SectionHeader customeClass={'border-0'} value={NewUpdate} />

        <CardBody className='pt-0'>
          <ul className='StepProgress'>
            {NewUpdateData.map((elem) => {
              return (
                <li className='StepProgress-item' key={elem.id}>
                  <strong>{elem.title}</strong>
                  <p>{elem.subtitle}</p>
                </li>
              );
            })}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewsAndUpdateCard;
