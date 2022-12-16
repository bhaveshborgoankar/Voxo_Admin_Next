import React, { Fragment } from 'react';
import { Row, Form, Label } from 'reactstrap';
import { AccountData } from '../../../Data/Users/AllUser';
const PermissionTabData = () => {
  return (
    <>
      {AccountData &&
        AccountData.map((elem) => {
          return (
            <Fragment key={elem.id}>
              <div className='card-header-1'>
                <h5>{elem?.title}</h5>
              </div>
              {elem?.child.map((item) => {
                return (
                  <Row className='mb-4 align-items-center' key={item.id}>
                    <label className='col-md-2 mb-0'>{item.subTitle}</label>
                    <div className='col-md-9'>
                      <Form className='radio-section'>
                        <Label>
                          <input type='radio' name={item.name} />
                          <i></i>
                          <span>{item.span1}</span>
                        </Label>

                        <Label>
                          <input type='radio' name={item.name} />
                          <i></i>
                          <span>{item.span2}</span>
                        </Label>
                      </Form>
                    </div>
                  </Row>
                );
              })}
            </Fragment>
          );
        })}
    </>
  );
};

export default PermissionTabData;
