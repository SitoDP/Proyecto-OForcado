import React from 'react';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';


const cafes = [
    { nombre: 'Café solo', precio: '1,3', img: 'img_url1' },
    { nombre: 'Café con leche', precio: '1,5', img: 'img_url2' },
    // ... agregar más objetos de café hasta llegar a 10
    { nombre: 'Café cortado', precio: '1,4', img: 'img_url10' },


];

const About = () => (
    <Row xs={1} md={2} className="g-4 text-center ">
        {cafes.map((cafe, idx) => (
            <Col key={idx}>
                <Card style={{ width: '18rem' }}>
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
);

export default About;