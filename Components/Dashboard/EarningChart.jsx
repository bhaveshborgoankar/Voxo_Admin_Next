import React from 'react';
import dynamic from 'next/dynamic';
import { Card, CardBody, Col } from 'reactstrap';
import SectionHeader from '../CommonComponents/SectionHeader';
import { EarningChartOption } from '../../Data/Dashboard/ChartData';
import { Earning } from '../../Constant';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
const EarningChart = () => {
  return (
    <Col xl='4'>
      <Card className='o-hidden card-hover'>
        <SectionHeader customeClass='card-header border-0 pb-1' value={Earning} />
        <CardBody className='p-0'>
          <div id='bar-chart-earning'>
            <ReactApexChart options={EarningChartOption.options} series={EarningChartOption.series} type='line' height={320} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default EarningChart;
