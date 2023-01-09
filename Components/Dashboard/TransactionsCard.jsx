import React from 'react';
import { Card, CardBody, Col, Table } from 'reactstrap';
import { Transactions } from '../../Constant';
import { TransactionsCards } from '../../Data/Dashboard/TotalEarning';
import SectionHeader from '../CommonComponents/SectionHeader';

const TransactionsCard = () => {
  return (
    <Col md='6' className='col-xxl-4'>
      <Card className='o-hidden card-hover'>
        <SectionHeader customeClass={'border-0'} value={Transactions} />

        <CardBody className='pt-0'>
          <div>
            <div className='table-responsive table-desi'>
              <Table className='user-table transactions-table border-0'>
                <tbody>
                  {TransactionsCards.map((elem) => {
                    return (
                      <tr key={elem.id}>
                        <td className={`${elem.id !== 1 && `td-color-${elem.id - 1}`} `}>
                          <div className='transactions-icon'>{elem.icon}</div>
                          <div className='transactions-name'>
                            <h6>{elem.title}</h6>
                            <p>{elem.subtitle}</p>
                          </div>
                        </td>

                        <td className={elem.class}>{elem.price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TransactionsCard;
