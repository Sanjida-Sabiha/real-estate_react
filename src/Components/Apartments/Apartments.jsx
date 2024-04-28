import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import plan from "../../assets/images/plan.png"

const Apartments = () => {
  return (
    <Fragment>
        <Container fluid={true} className="pb-120">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="servicesMainTitle">
                        <span className="aboutMainTitle">Apartment Sketch</span>
                        <h1 className="serviceTitle">Apartments Plan</h1>
                    </div>
                </Col>
            </Row>
            <Container className="mt-5">
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <div className="apartmentInfo">
                            <h4 className="apartmentTitle text-start ps-5">The Studio</h4>
                            <p className="apartmentSubTitle text-start ps-5">Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd minim veniam.</p>
                            <Container className="apartmentList">
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                        <div className="apartmentListMain">
                                            <ul className="list">
                                                <li className="listTilte text-start">Total Area</li>
                                                <li className="listTilte text-start">Bedroom</li>
                                                <li className="listTilte text-start">Bathroom</li>
                                                <li className="listTilte text-start">Belcony/Pets</li>
                                                <li className="listTilte text-start">Lounge</li>
                                            </ul>
                                        </div>
                                    </Col>

                                    <Col lg={6} md={6} sm={12}>
                                    <div className="apartmentListMain">
                                            <ul className="List">
                                                <li className="listTitleAnother text-end">Total Area</li>
                                                <li className="listTitleAnother text-end">Bedroom</li>
                                                <li className="listTitleAnother text-end">Bathroom</li>
                                                <li className="listTitleAnother text-end">Belcony/Pets</li>
                                                <li className="listTitleAnother text-end">Lounge</li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col >

                    <Col lg={6} md={6} sm={12}>
                        <div className="apartmentImg">
                            <img src={plan} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>    
    </Fragment>
  )
}

export default Apartments