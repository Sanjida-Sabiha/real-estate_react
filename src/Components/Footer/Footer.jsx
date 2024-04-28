import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/images/logo-2.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <Fragment>
        <Container fluid={true} className="footerArea">
            <Row>
                <Col lg={3} md={6} sm={6}>
                    <div className="footerBox">
                        <img src={logo} alt="" />
                        <p className="footerTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus fuga deserunt impedit, neque quia temporibus velit esse odio suscipit.</p>
                        <p className="Icon"><FontAwesomeIcon className="footerIcon" icon={faLocationDot} />Brooklyn, New York, United States</p>
                        <p className="Icon"><FontAwesomeIcon className="footerIcon" icon={faPhone} />+0123-456789</p>
                        <p className="Icon"><FontAwesomeIcon className="footerIcon" icon={faEnvelope} />example@example.com</p>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div className="footerBox">
                        <h5 className="footerMainTitle">Company</h5>
                        <div className="footerList">
                            <p className="footerListTitle">About</p>
                            <p className="footerListTitle">Blog</p>
                            <p className="footerListTitle">All Products</p>
                            <p className="footerListTitle">Contact</p>
                            <p className="footerListTitle">FAQ</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div className="footerBox">
                        <h5 className="footerMainTitle">Services</h5>
                        <div className="footerList">
                            <p className="footerListTitle">Cart</p>
                            <p className="footerListTitle">Wish List</p>
                            <p className="footerListTitle">LogIn</p>
                            <p className="footerListTitle">Checkout</p>
                            <p className="footerListTitle">Terms & Conditions</p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                    <div className="footerBox">
                        <h5 className="footerMainTitle">Company</h5>
                        <div className="footerList">
                            <p className="footerListTitle">About</p>
                            <p className="footerListTitle">Blog</p>
                            <p className="footerListTitle">All Products</p>
                            <p className="footerListTitle">Contact</p>
                            <p className="footerListTitle">FAQ</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container fluid={true} className="copyrightMain">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="copyright">
                        <p className="copyrightTitle">All Rights Reserved @ Company 2023</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default Footer