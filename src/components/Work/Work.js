import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import works from './WorkData.js'
import Card from './Card/Card'
import './Work.scss'

const Work = () => {
    return (
        <div id="work-wrapper" className="pt-5">
            <Container>
                <Row>
                    <Col md={12} className="text-center py-md-5 py-2">
                        <h1>HOW IT WORKS</h1>
                    </Col>
                    {works.map(work => (
                        <Col md={4} className="text-center px-2">
                            <Card iconUrl={work.url} heading={work.heading} description={work.description} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Work;
