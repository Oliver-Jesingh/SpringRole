import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Contact from './Form'
import './Contact.scss'

const ContactSection = () => {
    return (
        <div id="contact-wrapper" className="py-md-5">
            <Container>
                <Row>
                    <Col md={12} className="text-center py-5 py-md-5">
                        <h1>SIGN UP NOW</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <h3 className="form-header">Create your personal BAM account</h3>
                        <p className="py-3">Let’s create your BAM account. If you already have a BURST account, <a>log in</a> to upgrade it to a BAM account.</p>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
            </Container>
            <Contact />
        </div>
    )
}

export default ContactSection;
