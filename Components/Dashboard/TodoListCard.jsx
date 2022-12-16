import React from 'react';
import { Card, CardBody, Col, Form, Input } from 'reactstrap';
import { Addtask, ToDoList } from '../../Constant';
import { TodoListData } from '../../Data/Dashboard/TotalEarning';
import { Btn } from '../../AbstractElements';
import SectionHeader from '../CommonComponents/SectionHeader';
const TodoListCard = () => {
  return (
    <Col md='6' className='col-xxl-4'>
      <Card className='o-hidden card-hover'>
        <SectionHeader customeClass={'border-0'} value={ToDoList} />

        <CardBody className='pt-0'>
          <ul className='to-do-list'>
            {TodoListData.map((elem) => (
              <li className='to-do-item' key={elem.id}>
                <div className='form-check user-checkbox'>
                  <Input className='checkbox_animated check-it' type='checkbox' value='' id='flexCheckDefault' />
                </div>
                <div className='to-do-list-name'>
                  <strong>{elem.list}</strong>
                  <p>{elem.time}</p>
                </div>
              </li>
            ))}
            <li className='to-do-item'>
              <Form className='row g-2'>
                <Col lg='8'>
                  <Input type='text' className='form-control' id='name' placeholder='Enter Task Name' />
                </Col>
                <Col lg='4'>
                  <Btn attrBtn={{ className: 'w-100', type: 'button', color: 'primary' }}>{Addtask}</Btn>
                </Col>
              </Form>
            </li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TodoListCard;
