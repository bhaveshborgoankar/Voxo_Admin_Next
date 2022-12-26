import Link from 'next/link';
import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { Areyousure, ConfirmDelete, No, Yes } from '../../Constant';
import { deleteUserAPI } from '../../Constant/APIRoutes';
import request from '../../Utils/APIService';

const ActionButtons = ({ row }) => {
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
      <div>
        <Link href={`/user/edit/${row._id}`}>
          <span className='lnr lnr-pencil'></span>
        </Link>
      </div>
      <div className='ms-3'>
        <a href='#javascript' onClick={toggle}>
          <span className='lnr lnr-trash'></span>
        </a>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>{ConfirmDelete}</ModalHeader>
        <ModalBody>{Areyousure}</ModalBody>
        <ModalFooter>
          <Btn attrBtn={{ color: 'primary', onClick: () => onUserDelete() }}>{Yes}</Btn>
          <Btn attrBtn={{ color: 'warning', onClick: toggle }}>{No}</Btn>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default ActionButtons;
