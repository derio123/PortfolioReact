import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Card(params) {
    return (
        <Container>
            <h1 className="mt-4 mb-4">Meu Portfólio</h1>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Projeto 1</Card.Title>
                            <Card.Text>
                                Uma breve descrição do projeto 1.
                            </Card.Text>
                            <Button variant="primary">Ver mais</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Projeto 2</Card.Title>
                            <Card.Text>
                                Uma breve descrição do projeto 2.
                            </Card.Text>
                            <Button variant="primary">Ver mais</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src="https://via.placeholder.com/150" />
                        <Card.Body>
                            <Card.Title>Projeto 3</Card.Title>
                            <Card.Text>
                                Uma breve descrição do projeto 3.
                            </Card.Text>
                            <Button variant="primary">Ver mais</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}