import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import {Container, Row, Col} from 'react-bootstrap';

function TopBanner() {
  return (
    <Fragment>
        <Container fluid={true} className="topBanner p-0">
            <Row>
                <Col lg={12} md={12} sm={12}>
                  <div  className="bannerTitle">
                    <h4 className="Title"><FontAwesomeIcon icon={faHouse} style={{color: "#ed5502"}} /> Real Estate Agency</h4>
                    <p className="subTitle">Find Your Dream House By Us</p>
                  </div>
                </Col>
            </Row>
        </Container>
    </Fragment>
  )
}

export default TopBanner