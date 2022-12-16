import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { RecentActivitys } from '../../Constant';
import { RecentActivityData } from '../../Data/Dashboard/TotalEarning';
import SectionHeader from '../CommonComponents/SectionHeader';

const RecentActivity = () => {
  return (
    <Col md='6' className='col-xxl-4'>
      <Card className='o-hidden card-hover'>
        <SectionHeader customeClass={'border-0'} value={RecentActivitys} />

        <CardBody className='pt-0'>
          <ul className='recent-activity'>
            {RecentActivityData.map((elem) => (
              <li className='recent-item' key={elem.id}>
                <div className='recent-icon'>
                  {elem.feather ? <>{elem.icon}&nbsp;</> : <span className={elem.icon}></span>}
                  <p>{elem.title}</p>
                </div>
                <div className='recent-timer'>
                  <h6 className={`${elem.id === 5 || elem.id === 6 ? `color-${elem.id - 3}` : `color-${elem.id}`}`}>{elem.time}</h6>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentActivity;
