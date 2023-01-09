import dynamic from 'next/dynamic';
import React from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import { Visitors } from '../../Constant';
import { VisitorsCardOption } from '../../Data/Dashboard/ChartData';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const VisitorsCard = () => {
  return (
    <Col md='6' className='col-xxl-4'>
      <div className='h-100'>
        <Card className='o-hidden card-hover'>
          <CardHeader className='border-0'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='card-header-title'>
                <h4>{Visitors}</h4>
              </div>
            </div>
          </CardHeader>
          <CardBody className='pt-0'>
            <div className='pie-chart'>
              <div id='pie-chart-visitors'>
                <ReactApexChart options={VisitorsCardOption.options} series={VisitorsCardOption.series} type='donut' height={340} />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default VisitorsCard;
