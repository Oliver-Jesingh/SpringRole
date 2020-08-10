import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import './Benefits.scss'

const Benefits = () => {
    return (
        <div id="benefits-wrapper" className="py-md-5">
            <Container>
                <Row>
                    <Col md={12} className="text-center py-2 py-md-5">
                        <h1>BENEFITS</h1>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={10}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>ACTIVITY</th>
                                    <th>REWARD</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>For each office order of a Toothbrush</td>
                                    <td>You earn a fantastic $2 in Commission EVERY time</td>
                                </tr>
                                <tr>
                                    <td>For every qualifying ambassador that the BAM Manager signs up within their own office</td>
                                    <td>You earn an incredible $10</td>
                                </tr>
                                <tr>
                                    <td>When you order 100 toothbrushes (cumulative)</td>
                                    <td>Receive a whopping $100 bonus as a thank you from us</td>
                                </tr>
                                <tr>
                                    <td>When you order 250 toothbrushes (cumulative)</td>
                                    <td>We’ll pay the AADOM conference attendance for you as a BAM (BURST AADOM MEMBER)</td>
                                </tr>
                                <tr>
                                    <td>When you order 500 toothbrushes (cumulative)</td>
                                    <td>Receive a free ticket to BURSTCon and have the time of your life!</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Benefits;
