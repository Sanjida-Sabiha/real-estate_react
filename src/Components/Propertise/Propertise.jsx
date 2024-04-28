import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import prop from "../../assets/images/propertise.png"
import home from "../../assets/images/prop-1.jpg"
import belcony from "../../assets/images/prop-2.jpg"
import drawing from "../../assets/images/prop-3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faSink, faCar, faSquare } from '@fortawesome/free-solid-svg-icons'

function Propertise() {
  return (
    <Fragment>
        <Container className="Propertise pt-120 pb-120">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className="propertiseInfo text-start">
                        <span className="aboutMainTitle">About Us</span>
                        <h1 className="aboutTitle">Today Sells Properties</h1>
                        <p className="aboutSubTitle">Houzez allow you to design unlimited panels and real estate custom forms to capture leads and keep record of all information</p>
                        <Container className="propertyItems">
                            <Row>
                                <Col>
                                    <div>
                                        <p className="propertyList">Live Music Cocerts at Luviana</p>
                                        <p className="propertyList">Live Music Cocerts at Luviana</p>
                                        <p className="propertyList">Live Music Cocerts at Luviana</p>
                                        <p className="propertyList">Live Music Cocerts at Luviana</p>
                                    </div> 
                                </Col>
                            </Row>
                        </Container>
                        <Container className="flatsInfo">
                            <Row>
                                <Col lg={3} md={6} sm={6}>
                                    <div className="p-0 flatInfo">
                                        <h5 className="flatTitle">3 <FontAwesomeIcon icon={faBed} style={{color: "rgb(101 101 101)"}} /></h5>
                                        <p className="flatSubTitle">Bedrooms</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6}>
                                    <div className="p-0 flatInfo">
                                        <h5 className="flatTitle">2 <FontAwesomeIcon icon={faSink} style={{color: "rgb(101 101 101)"}} /></h5>
                                        <p className="flatSubTitle">Bathroom</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6}>
                                    <div className="p-0 flatInfo">
                                        <h5 className="flatTitle">3 <FontAwesomeIcon icon={faCar} style={{color: "rgb(101 101 101)"}} /></h5>
                                        <p className="flatSubTitle">Car Parking</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={6} sm={6}>
                                    <div className="p-0">
                                        <h5 className="flatTitle">3540 <FontAwesomeIcon icon={faSquare} style={{color: "rgb(101 101 101)"}} /></h5>
                                        <p className="flatSubTitle">Square Ft</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Container className="flatImg p-0">
                            <Row>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="flatImgList">
                                        <img src={home} alt="Props" />
                                    </div> 
                                </Col>
                                <Col lg={4} md={4} sm={12}>
                                    <div className="flatImgList">
                                        <img src={belcony} alt="Props" />
                                    </div>
                                </Col>
                                <Col lg={4} md={4} sm={12} >
                                    <div className="flatImgList">
                                        <img src={drawing} alt="Props" />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>

                <Col lg={6} md={6} sm={12}>
                    <div  className="propertiseImg pt-3">
                        <img src={prop} alt="Propertise" />
                    </div>
                </Col>

            </Row>
        </Container>
    </Fragment>
  )
}

export default Propertise