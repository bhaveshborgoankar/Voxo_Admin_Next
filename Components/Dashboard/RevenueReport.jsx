import React from 'react';
import dynamic from 'next/dynamic';
import { CardBody, Col } from 'reactstrap';
import { RevenueReports } from '../../Constant';
import SectionHeader from '../CommonComponents/SectionHeader';
import { RevenueReportOption } from '../../Data/Dashboard/ChartData';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const RevenueReport = () => {
  return (
    <Col xl='8'>
      <div className='card o-hidden '>
        <SectionHeader customeClass={'border-0 pb-1'} value={RevenueReports} />
        <CardBody className='p-0'>
          <div id='report-chart'><ReactApexChart type='bar' series={RevenueReportOption.series} options={RevenueReportOption.options} height={320} /></div>
        </CardBody>
      </div>
    </Col>
  );
};

export default RevenueReport;
