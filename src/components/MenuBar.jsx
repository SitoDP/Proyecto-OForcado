import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuBar = () => (
    <Navbar bg="" expand="lg" className='justify-content-center'>
        <Nav className="mr-auto justify-content-center">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/cafespg">Cafes</Nav.Link>
            <Nav.Link as={Link} to="/infusionespg">Infusiones</Nav.Link>
            <Nav.Link as={Link} to="/chocolatespg">Chocolates</Nav.Link>
        </Nav>
    </Navbar>
);

export default MenuBar;