import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => (
    <Navbar bg="" expand="lg">
        <Navbar.Brand as={Link} to="/" className=''>
            <img src="https://panel.cartamovil.com/uploads/images/sucursales/movil-60c70466eeeb9-foto.jpg" alt="Logo" height={50} width={150} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
            <Nav className="mr-auto justify-content-center">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                <NavDropdown title="Nuestra Carta" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/menu/cafespg">Cafés</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/menu/infusionespg">Infusiones</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/menu/chocolatespg">Chocolates</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default NavigationBar;