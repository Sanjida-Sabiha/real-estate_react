import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import about from "../../assets/images/About.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMountainCity, faHeart, faFileShield } from '@fortawesome/free-solid-svg-icons'


function About() {
  return (
    <Fragment>
        <Container className="About pt-120 pb-120">
            <Row>

                <Col lg={6} md={6} sm={12} className="aboutImg">
                    <img src={about} alt="about" />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <div  className="Info">
                    <span className="aboutMainTitle">About Us</span>
                    <h1 className="aboutTitle">The Leading Real Estate Rental Marketplace.</h1>
                    <p className="aboutSubTitle">Over 39,000 people work for us in more than 70 countries all over the This breadth of global coverage, combined with specialist services</p>
                  
                  
                    <Container className="aboutInfo">
                      <Row>
                          <Col lg={6} md={6} sm={12}>
                            <h4 className="aboutInfoTitle"><FontAwesomeIcon icon={faHouse} style={{color: "#ed5502", marginRight: "10px"}} />Smart Home Design</h4>
                          </Col>
                          
                          <Col lg={6} md={6} sm={12}>
                            <h4 className="aboutInfoTitle"><FontAwesomeIcon icon={faMountainCity} style={{color: "#ed5502", marginRight: "10px"}} />Beautiful Scene Around</h4>
                          </Col>
                          
                          <Col lg={6} md={6} sm={12}>
                            <h4 className="aboutInfoTitle"><FontAwesomeIcon icon={faHeart} style={{color: "#ed5502", marginRight: "10px"}} />Exceptional Lifestyle</h4>
                          </Col>
                        

                          <Col lg={6} md={6} sm={12}>
                            <h4 className="aboutInfoTitle"><FontAwesomeIcon icon={faFileShield} style={{color: "#ed5502", marginRight: "10px"}} />Complete 24/7 Security</h4>
                          </Col>
                      </Row>
                    </Container>  
                    <p className="aboutPromo">"Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"</p>
                    <button className="aboutButton">Our Services</button>
                  </div>
                </Col>

            </Row>
        </Container>
    </Fragment>
  )
}

export default About