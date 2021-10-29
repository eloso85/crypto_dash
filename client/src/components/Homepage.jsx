import React from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'

import { useGetCryptoQuery } from '../services/cryptoApi'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Homepage = () => {
    const{data, isFetching }= useGetCryptoQuery();
    console.log(data)

    
    return (
        <>
            <Container fluid>
                <Row>
                    <Col ><h1 className="header">Crypto Stats</h1></Col>
                    <Col>Hello</Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Total Cryptocurrencies</h3>
                    </Col>
                    <Col>
                        <h2>Total Cryptocurrencies</h2>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Homepage
