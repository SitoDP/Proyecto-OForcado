import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import cafes from '../assets/cafes';
import infusiones from '../assets/infusiones';
import '../pages/Home.css';
import chocolates from '../assets/chocolates';

const Home = () => (
    <>
        <Container className='introduccion'>
            <Row className="my-4 text-center">
                <Col>
                    <h2>Bienvenido a O Forcado 2!</h2>
                    <p>
                        Disfruta de nuestra gran variedad de cafés, infusiones y chocolates al lado del mar.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col className="text-center">
                </Col>

            </Row>

        </Container>
        <Container className='partwelcome'>

        </Container>
        <Container className='partfirst my-5'>
            <h2 className='text-center'>Aqui están algunos de nuestros productos</h2>
            <Row xs={1} md={3} xl={3} className="g-2 text-center">
                {cafes.slice(4, 7).map((cafe, idx) => (
                    <Col key={idx}>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={cafe.img} />
                            <Card.Body>
                                <Card.Title>{cafe.nombre}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row xs={1} md={3} xl={3} className="g-2 text-center">
                {infusiones.slice(4, 7).map((infusion, idx) => (
                    <Col key={idx}>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={infusion.img} />
                            <Card.Body>
                                <Card.Title>{infusion.nombre}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row xs={1} md={3} xl={3} className="g-2 text-center">
                {chocolates.slice(4, 7).map((chocolate, idx) => (
                    <Col key={idx}>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src={chocolate.img} />
                            <Card.Body>
                                <Card.Title>{chocolate.nombre}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
        <Container className='partinside'>

        </Container>

        <Container className='partabout'>

            <Row className="my-4">
                <Col>
                    <h2 className='text-center'>Acerca de nosotros</h2>
                    <p>
                        Nuestra cafetería se encuentra al lado del mar, ofreciendo una variedad de cafés de alta calidad.
                        Nos apasiona brindar a nuestros clientes una experiencia inolvidable con cada taza de café.
                        Somos un equipo de baristas apasionados que se esfuerzan por brindar un excelente servicio al cliente, tenemos ya
                        más de 6 años de experiencia tanto en el sector como en la zona, sabemos lo que os gusta y nos encanta hacerlo.
                        <br />
                        Queremos que disfrutes de nuestro servicio y de nuestros productos, por eso siempre estamos buscando nuevas formas de mejorar.
                    </p>
                    <br />
                    <p className='text-center'> ¿Qué esperas? ¡Ven a visitarnos!</p>

                </Col>
            </Row>
        </Container>
    </>


);

export default Home;