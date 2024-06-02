import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import chocolates from '../assets/chocolates';

const Chocolatespg = () => (
    <Container className="">
        <Row xs={1} md={2} xxl={5} className="g-2 text-center justify-content-around">
            {chocolates.map((chocolate, idx) => (
                <Col key={idx} className=''>
                    <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={chocolate.img} />
                        <Card.Body>
                            <Card.Title>{chocolate.nombre}</Card.Title>
                            <Card.Text>
                                {chocolate.precio}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

export default Chocolatespg;