import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Buy from "../../assets/images/services1.png"
import Rent from "../../assets/images/services2.png"
import Sell from "../../assets/images/services3.png"

const Services = () => {
  return (
    <Fragment>
        <Container fluid={true} className="servicesMain pb-120">
            <Row>
                <Col lg={12} md={12} sm={12}>
                     <div className="servicesMainTitle">
                     <span className="aboutMainTitle">Our Services</span>
                     <h1 className="serviceTitle">Our Main Focus</h1>
                     </div>
                </Col>
            </Row>
            <Container className="serviceMainCard mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard">
                            <img src={Buy} alt="services" />
                            <h4 className="serviceCardTitle">Buy a Home</h4>
                            <p className="serviceCardSubTitle">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                            <span className="serviceCardSpan">Find A Home</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard">
                            <img src={Rent} alt="services" />
                            <h4 className="serviceCardTitle">Rent a Home</h4>
                            <p className="serviceCardSubTitle">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                            <span className="serviceCardSpan">Find A Home</span>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className="serviceCard">
                            <img src={Sell} alt="services" />
                            <h4 className="serviceCardTitle">Sell a Home</h4>
                            <p className="serviceCardSubTitle">over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
                            <span className="serviceCardSpan">Find A Home</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    </Fragment>
  )
}

export default Services