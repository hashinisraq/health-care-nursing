import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div style={{ padding: "110px" }}>
            <h2>Contact us</h2>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title><u>Virtual Contact</u></Card.Title>
                            <Card.Text>
                                <p>Phone: 56478921462</p>
                                <p>Email: healthcarenursing@yahoo.com</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title><u>Physical Contact</u></Card.Title>
                            <Card.Text>
                                <p>House no: 09, Road no: 13/2</p>
                                <p>Dhanmondi, Dhaka-1209, Bangladesh</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;