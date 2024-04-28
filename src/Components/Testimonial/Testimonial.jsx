import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick'
import author from "../../assets/images/author.jpg"
import author2 from "../../assets/images/testi-1.jpg"
import author3 from "../../assets/images/testi-2.jpg"
import author4 from "../../assets/images/testi-3.jpg"
import author5 from "../../assets/images/testi-4.jpg"

const settings = {
    autoplaySpeed: 1500,
    infinite: true,
    autoplay: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
        console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        console.log("after change", currentSlide);
      },  

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


const Testimonial = () => {
  return (
    <Fragment>
        <Container fluid={true} className="testiBanner pb-120">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="servicesMainTitle">
                        <span className="aboutMainTitle">Our Testimonial</span>
                        <h1 className="serviceTitle">Clients Feedback</h1>
                    </div>
                </Col>
            </Row>
            <div className="testiMain mt-5 pb-5">
                <Slider {...settings}>
                    <div className="testiMainSlide">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="testiMainSliderBox">
                                    <p className="testiMainSliderTitle"><FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"50px", color:"tomato"}} /> Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte</p>
                                    <div className="author">
                                        <img src={author} style={{width:'20%'}} alt="" />
                                        <h4 className="authorName testiAuthorName ps-2">William Seklo 
                                            <span className="authorSubName">Estate Agents</span>
                                        </h4>
                                    </div>   
                                </div>
                            </Col>
                        </Row>   
                    </div>
                    <div className="testiMainSlide">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="testiMainSliderBox">
                                    <p className="testiMainSliderTitle"><FontAwesomeIcon icon={faQuoteLeft } style={{fontSize:"50px", color:"tomato"}} /> Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte</p>
                                    <div className="author">
                                        <img src={author2} style={{width:'20%'}} alt="" />
                                        <h4 className="authorName testiAuthorName ps-2">William Seklo 
                                            <span className="authorSubName">Estate Agents</span>
                                        </h4>
                                    </div>   
                                </div>
                            </Col>
                        </Row>   
                    </div>
                    <div className="testiMainSlide">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="testiMainSliderBox">
                                    <p className="testiMainSliderTitle"><FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"50px", color:"tomato"}} /> Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte</p>
                                    <div className="author">
                                        <img src={author3} style={{width:'20%'}} alt="" />
                                        <h4 className="authorName testiAuthorName ps-2">William Seklo 
                                            <span className="authorSubName">Estate Agents</span>
                                        </h4>
                                    </div>   
                                </div>
                            </Col>
                        </Row>   
                    </div>
                    <div className="testiMainSlide">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="testiMainSliderBox">
                                    <p className="testiMainSliderTitle"><FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"50px", color:"tomato"}} /> Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte</p>
                                    <div className="author">
                                        <img src={author4} style={{width:'20%'}} alt="" />
                                        <h4 className="authorName testiAuthorName ps-2">William Seklo 
                                            <span className="authorSubName">Estate Agents</span>
                                        </h4>
                                    </div>   
                                </div>
                            </Col>
                        </Row>   
                    </div>
                    <div className="testiMainSlide">
                        <Row>
                            <Col lg={12} md={12} sm={12}>
                                <div className="testiMainSliderBox">
                                    <p className="testiMainSliderTitle"><FontAwesomeIcon icon={faQuoteLeft} style={{fontSize:"50px", color:"tomato"}} /> Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um dolor sit amet, consecte</p>
                                    <div className="author">
                                        <img src={author5} style={{width:'20%'}} alt="" />
                                        <h4 className="authorName testiAuthorName ps-2">William Seklo 
                                            <span className="authorSubName">Estate Agents</span>
                                        </h4>
                                    </div>   
                                </div>
                            </Col>
                        </Row>   
                    </div>
                </Slider>
            </div>
        </Container>
    </Fragment>
  )
}

export default Testimonial