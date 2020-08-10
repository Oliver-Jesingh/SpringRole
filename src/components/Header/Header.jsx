import React from 'react'
import './Header.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <div id="header-wrapper">
            <Container fluid className="head position-absolute">
                <Row>
                    <Col md={12}>
                        <h2>SIGN UP YOUR DENTAL OFFICE TODAY</h2>
                    </Col>
                    <Col md={12} className="py-4">
                        <h1>
                            THE BEST ORAL<br />
                            CARE ON THE <br />
                            PLANET
                        </h1>
                    </Col>
                    <Col md={12}>
                        <p>YOUR PATIENTS DESERVE BURST</p>
                    </Col>
                    <Col md={12} className="py-3">
                        <Button>LEARN HOW IT WORKS</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;