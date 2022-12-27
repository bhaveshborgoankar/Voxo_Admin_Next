import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { Areyousure, ConfirmDelete, No, Yes } from '../../Constant';
import request from '../../Utils/APIService';

const ActionButtons = ({ row, editRedirectLink, deleteAPILink, toReRender }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onUserDelete = async () => {
    const Res = await request({ url: `${deleteAPILink}${row._id}`, method: 'DELETE' });
    console.log('Res', Res);
    if (Res.status === 200) {
      setIsOpen(!isOpen);
      return router.push(toReRender, '', { scroll: false });
    }
  };
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <Link href={`${editRedirectLink}${row._id}`}>
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
