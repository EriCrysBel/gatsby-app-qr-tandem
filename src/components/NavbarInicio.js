import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import ModalSoporte from './ModalSoporte'; // Asegúrate de tener la importación correcta
import "./NavbarInicio.css"

function NavbarInicio(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modal, setModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          <StaticImage src='../images/logoblanco.png' alt="Logo" width={100} />
        </NavbarBrand>
        {isMobile ? (
          <>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/Login" className='navlink'>APP QR</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={toggleModal} className='navlink'>
                    SOPORTE
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/InfoInstitucional" className='navlink'>
                    INFORMACIÓN INSTITUCIONAL
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </>
        ) : (
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Login" className='navlink'>APP QR</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={toggleModal} className='navlink'>
                SOPORTE TÉCNICO
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/InfoInstitucional" className='navlink'>
                INFORMACIÓN INSTITUCIONAL
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
      <ModalSoporte modal={modal} toggleModal={toggleModal} />
    </div>
  )
}

export default NavbarInicio