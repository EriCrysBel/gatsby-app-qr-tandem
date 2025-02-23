import React, { useState } from 'react';
import { Button, 
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter 
} from 'reactstrap';
import PropTypes from 'prop-types';
import CompaQr from "./CompaQr.js"

import { GoShareAndroid } from "react-icons/go";

function ModalCompartir(props) {
  const { className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Button onClick={toggle} >
      <GoShareAndroid size={10}/>
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
      
        <ModalHeader toggle={toggle} >
          Comparte tu QR
        </ModalHeader>
        <ModalBody>
          <CompaQr/>
        </ModalBody>
        <ModalFooter>
          <Button color="warning" href="/">
            Volver a Inicio
          </Button>
          <Button color="dark" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

ModalCompartir.propTypes = {
  className: PropTypes.string,
};

export default ModalCompartir;