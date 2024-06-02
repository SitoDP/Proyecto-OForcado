import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Contact = () => (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
        <Row style={{ width: "80rem" }}>
            <Col >
                <Form action='https://formspree.io/f/mwkgdozd' method='POST'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Dirección de correo electrónico</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Introduce tu correo electrónico" />
                    </Form.Group>

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Introduce tu nombre completo" />
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control as="textarea" name='message' rows={3} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Col>
        </Row>
    </Container>
);

export default Contact;