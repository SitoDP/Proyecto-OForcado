import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import infusiones from '../assets/infusiones';

const Infusionespg = () => (
    <Container className="">
        <Row xs={1} md={2} xxl={5} className="g-2 text-center justify-content-around">
            {infusiones.map((infusion, idx) => (
                <Col key={idx} className=''>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={infusion.img} />
                        <Card.Body>
                            <Card.Title>{infusion.nombre}</Card.Title>
                            <Card.Text>
                                {infusion.precio}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Infusionespg;