import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import CompaQr from "./CompaQr.js"

import { GoShareAndroid } from "react-icons/go";

function FooterModalCompartir(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="light" onClick={toggle} >
      <GoShareAndroid size={20}/>Compartir
      </Button>
      <Modal isOpen={modal} fade={false} toggle={toggle}>
      
        <ModalHeader toggle={toggle} >
          Comparte la página web
        </ModalHeader>

        <ModalBody className='modalbody'>
          <CompaQr/>
        </ModalBody>
        
        <ModalFooter>
          <Button color="dark" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default FooterModalCompartir;