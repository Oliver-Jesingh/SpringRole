import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './Form.scss'

const Contact = () => {
    return (
        <div id="form-wrapper">
            <Form>
                <Container>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10}>
                            <Row>
                                <Col md={6} className="form-group">
                                    <Form.Control type="text" placeholder="First Name *" />
                                </Col>
                                <Col md={6} className="form-group">
                                    <Form.Control type="text" placeholder="Last Name *" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="form-group">
                                    <Form.Control type="text" placeholder="AADOM member number *" />
                                </Col>
                                <Col md={12} className="form-group">
                                    <Form.Control type="email" placeholder="Your email address *" />
                                </Col>
                                <Col md={12} className="form-group">
                                    <Form.Control type="text" placeholder="Your Address Line 1 *" />
                                </Col>
                                <Col md={12} className="form-group">
                                    <Form.Control type="text" placeholder="Your Address Line 2" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} className="form-group">
                                    <Form.Control as="select">
                                        <option>State</option>
                                    </Form.Control>
                                </Col>
                                <Col md={3} className="form-group">
                                    <Form.Control type="text" placeholder="City *" />
                                </Col>
                                <Col md={3} className="form-group">
                                    <Form.Control type="text" placeholder="Zip *" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="form-group">
                                    <Form.Control type="password" placeholder="Password *" />
                                </Col>
                                <Col md={12} className="form-group">
                                    <Form.Control type="password" placeholder="Confirm Password *" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="form-group">
                                    <Button>CREATE YOUR BAM ACCOUNT NOW</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} className="form-group py-2">
                                    <p>Already have an account? <a>Log in</a></p>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
            </Form>
        </div>
    )
}

export default Contact;
