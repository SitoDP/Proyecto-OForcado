import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import cafes from '../assets/cafes';

const Carta = () => (
    <Container className="">
        <Row xs={1} md={2} xxl={5} className="g-2 text-center justify-content-around">
            {cafes.map((cafe, idx) => (
                <Col key={idx} className=''>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={cafe.img} />
                        <Card.Body>
                            <Card.Title>{cafe.nombre}</Card.Title>
                            <Card.Text>
                                {cafe.precio}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Carta;