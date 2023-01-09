import React from 'react';
import { Container, Row } from 'reactstrap';
import BrowserStatusCard from './BrowserStatusCard';
import EarningCard from './EarningCard';
import EarningChart from './EarningChart';
import NewsAndUpdateCard from './NewsAndUpdateCard';
import RecentActivity from './RecentActivity';
import RevenueReport from './RevenueReport';
import TodoListCard from './TodoListCard';
import TransactionsCard from './TransactionsCard';
import VisitorsCard from './VisitorsCard';
const DashboardContain = () => {
  return (
    <Container fluid={true}>
      <Row>
        <EarningCard />
        <EarningChart />
        <RevenueReport />
        <TransactionsCard />
        <VisitorsCard />
        <NewsAndUpdateCard />
        <TodoListCard />
        <RecentActivity />
        <BrowserStatusCard />
      </Row>
    </Container>
  );
};
export default DashboardContain;
