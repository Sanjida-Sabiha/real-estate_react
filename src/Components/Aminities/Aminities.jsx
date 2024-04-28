import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faArrowRight, faWaterLadder,faShieldHalved, faStethoscope } from '@fortawesome/free-solid-svg-icons'

const Aminities = () => {
  return (
    <Fragment>
        <Container fluid={true} className="pb-120">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="servicesMainTitle">
                        <span className="aboutMainTitle">Our Testimonial</span>
                        <h1 className="serviceTitle">Clients Feedback</h1>
                    </div>
                </Col>
            </Row>
            <Container className="mt-5">
                <Row>
                    <Col lg={3} md={6} sm={12}>
                        <div className="aminities">
                            <span className="animitiesIcon">
                                <FontAwesomeIcon className="aminitiesCar" icon={faCar} style={{color: "#ed5502",}} />
                            </span>
                            <h4 className="animitiesTitle">parking space</h4>
                            <span className="animitiesArrow">
                                <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                            </span>
                        </div> 
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="aminities">
                            <span className="animitiesIcon">
                                <FontAwesomeIcon className="aminitiesCar" icon={faWaterLadder} style={{color: "#ed5502",}} />
                            </span>
                            <h4 className="animitiesTitle">Swimming Pool</h4>
                            <span className="animitiesArrow">
                                <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                            </span>
                        </div> 
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="aminities">
                            <span className="animitiesIcon">
                                <FontAwesomeIcon className="aminitiesCar" icon={faShieldHalved} style={{color: "#ed5502",}} />
                            </span>
                            <h4 className="animitiesTitle">private security</h4>
                            <span className="animitiesArrow">
                                <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                            </span>
                        </div> 
                    </Col>
                    <Col lg={3} md={6} sm={12}>
                        <div className="aminities">
                            <span className="animitiesIcon">
                            <FontAwesomeIcon className="aminitiesCar" icon={faStethoscope} style={{color: "#ed5502",}} />
                            </span>
                            <h4 className="animitiesTitle">medical center</h4>
                            <span className="animitiesArrow">
                                <FontAwesomeIcon className="arrow" icon={faArrowRight} />
                            </span>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </Container>
    </Fragment>
  )
}

export default Aminities