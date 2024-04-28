import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faSink, faCar} from '@fortawesome/free-solid-svg-icons'
import feature1 from "../../assets/images/projects/feature-1.jpg"
import feature2 from "../../assets/images/projects/feature-2.jpg"
import feature3 from "../../assets/images/projects/feature-3.jpg"
import feature4 from "../../assets/images/projects/feature-4.jpg"
import feature5 from "../../assets/images/projects/feature-5.jpg"
import feature6 from "../../assets/images/projects/feature-6.jpg"
import author from "../../assets/images/author.jpg"

const settings = {
    autoplaySpeed: 2000,
    infinite: true,
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const Features = () => {
  return (
    <Fragment>
        <Container fluid={true} className="pb-120">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="servicesMainTitle">
                        <span className="aboutMainTitle">Properties</span>
                        <h1 className="serviceTitle">Featured Listings</h1>
                    </div>
                </Col>
            </Row>
            <div className="features mt-5">
                <Slider {...settings}>
                    <div className="featureMain">
                        <div className="featureImg">
                            <img src={feature1} alt="" />
                        </div>
                        <div className="featureInfo text-start ps-4">
                            <span className="featureInfoSpan">$34,900/Month</span>
                            <h4 className="featureInfoTitle">Modern Apartment</h4>
                            <p className="featureInfoSubTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nesciunt nulla. Itaque, recusandae reprehenderit.</p>
                            <Container className="flatsInfo p-0">
                                <Row className="me-5">
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faBed} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bedrooms</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">2 <FontAwesomeIcon icon={faSink} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bathroom</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faCar} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Car Parking</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="author">
                                <img src={author} alt="" />
                                <h4 className="authorName ps-2">William Seklo 
                                    <span className="authorSubName">Estate Agents</span>
                                </h4>
                            </div>        
                        </div>
                    </div>

                    <div className="featureMain">
                        <div className="featureImg">
                            <img src={feature2} alt="" />
                        </div>
                        <div className="featureInfo text-start ps-4">
                            <span className="featureInfoSpan">$34,900/Month</span>
                            <h4 className="featureInfoTitle">Comfortable Apartment</h4>
                            <p className="featureInfoSubTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nesciunt nulla. Itaque, recusandae reprehenderit.</p>
                            <Container className="flatsInfo p-0">
                                <Row className="me-5">
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faBed} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bedrooms</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">2 <FontAwesomeIcon icon={faSink} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bathroom</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faCar} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Car Parking</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="author">
                                <img src={author} alt="" />
                                <h4 className="authorName ps-2">William Seklo 
                                    <span className="authorSubName">Estate Agents</span>
                                </h4>
                            </div> 
                        </div>
                    </div>

                    <div className="featureMain">
                        <div className="featureImg">
                            <img src={feature3} alt="" />
                        </div>
                        <div className="featureInfo text-start ps-4">
                            <span className="featureInfoSpan">$34,900/Month</span>
                            <h4 className="featureInfoTitle">Beautiful Apartment</h4>
                            <p className="featureInfoSubTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nesciunt nulla. Itaque, recusandae reprehenderit.</p>
                            <Container className="flatsInfo p-0">
                                <Row className="me-5">
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faBed} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bedrooms</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">2 <FontAwesomeIcon icon={faSink} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bathroom</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faCar} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Car Parking</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="author">
                                <img src={author} alt="" />
                                <h4 className="authorName ps-2">William Seklo 
                                    <span className="authorSubName">Estate Agents</span>
                                </h4>
                            </div> 
                        </div>
                    </div>

                    <div className="featureMain">
                        <div className="featureImg">
                            <img src={feature4} alt="" />
                        </div>
                        <div className="featureInfo text-start ps-4">
                            <span className="featureInfoSpan">$34,900/Month</span>
                            <h4 className="featureInfoTitle">New Apartment Nice View</h4>
                            <p className="featureInfoSubTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nesciunt nulla. Itaque, recusandae reprehenderit.</p>
                            <Container className="flatsInfo p-0">
                                <Row className="me-5">
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faBed} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bedrooms</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">2 <FontAwesomeIcon icon={faSink} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bathroom</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faCar} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Car Parking</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="author">
                                <img src={author} alt="" />
                                <h4 className="authorName ps-2">William Seklo 
                                    <span className="authorSubName">Estate Agents</span>
                                </h4>
                            </div> 
                        </div>
                    </div>

                    <div className="featureMain">
                        <div className="featureImg">
                            <img src={feature5} alt="" />
                        </div>
                        <div className="featureInfo text-start ps-4">
                            <span className="featureInfoSpan">$34,900/Month</span>
                            <h4 className="featureInfoTitle">Comfortable Apartment</h4>
                            <p className="featureInfoSubTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nesciunt nulla. Itaque, recusandae reprehenderit.</p>
                            <Container className="flatsInfo p-0">
                                <Row className="me-5">
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faBed} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bedrooms</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">2 <FontAwesomeIcon icon={faSink} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bathroom</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faCar} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Car Parking</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="author">
                                <img src={author} alt="" />
                                <h4 className="authorName ps-2">William Seklo 
                                    <span className="authorSubName">Estate Agents</span>
                                </h4>
                            </div> 
                        </div>
                    </div>

                    <div className="featureMain">
                        <div className="featureImg">
                            <img src={feature6} alt="" />
                        </div>
                        <div className="featureInfo text-start ps-4">
                            <span className="featureInfoSpan">$34,900/Month</span>
                            <h4 className="featureInfoTitle">Luxury villa in Rego Park </h4>
                            <p className="featureInfoSubTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit eos nesciunt nulla. Itaque, recusandae reprehenderit.</p>
                            <Container className="flatsInfo p-0">
                                <Row className="me-5">
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faBed} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bedrooms</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="featureBorder p-0">
                                            <h5 className="flatTitle">2 <FontAwesomeIcon icon={faSink} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Bathroom</p>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={6} sm={6}>
                                        <div className="p-0">
                                            <h5 className="flatTitle">3 <FontAwesomeIcon icon={faCar} style={{color: "rgb(101 101 101)"}} /></h5>
                                            <p className="flatSubTitle">Car Parking</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            <div className="author">
                                <img src={author} alt="" />
                                <h4 className="authorName ps-2">William Seklo 
                                    <span className="authorSubName">Estate Agents</span>
                                </h4>
                            </div> 
                        </div>
                    </div>
                </Slider>
            </div>
        </Container>
    </Fragment>
  )
}

export default Features