import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => (
    <footer className="mt-5">
        <Container fluid={true} className=''>
            <Row className="border-top justify-content-between p-3 text-center" >
                <Col className="p-0" md={3} sm={12} xxl={3} >
                    O Forcado 2
                </Col>
                <Col className="p-0" md={3} sm={12} xxl={6}>
                    Dirección: Crt. General 72 Bajo Ezaro A Coruña 15297
                    <br />
                    Teléfono: +34 981 71 25 96
                </Col>
                <Col className="p-0" md={3} sm={12} xxl={3}>
                    Redes sociales: <br />
                    <a href="https://es-es.facebook.com/oforcadoezaro.es/" target="_blank" className='p-3'><FaFacebook color='black' /></a>
                    <a href="https://www.instagram.com/oforcado.ezaro/" target="_blank"><FaInstagram color='black' /></a>
                </Col>
            </Row>
        </Container>
    </footer>
);

export default Footer;