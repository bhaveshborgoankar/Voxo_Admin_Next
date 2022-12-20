import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { deleteUserAPI } from '../../Constant/APIRoutes';
import request from '../../Utils/APIService';

const DeleteHandler = ({ row }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onUserDelete = async () => {
    const Res = await request({ url: `${deleteUserAPI}${row._id}`, method: 'DELETE' });
    console.log('Res', Res);
    setIsOpen(!isOpen);
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <a href='#javascript' onClick={toggle}>
        <span className='lnr lnr-trash'></span>
      </a>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Confirm Delete</ModalHeader>
        <ModalBody>Are you sure?</ModalBody>
        <ModalFooter>
          <Btn attrBtn={{ color: 'primary', onClick: () => onUserDelete() }}>Yes</Btn>
          <Btn attrBtn={{ color: 'warning', onClick: toggle }}>No</Btn>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DeleteHandler;
