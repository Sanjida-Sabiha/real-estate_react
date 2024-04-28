import React, { Fragment} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse, faBuilding, faTrowel, faCouch } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Summary() {
  return (
    <Fragment>
        <Container fluid={true} className="summaryMain pt-120 pb-120">
            <Row>
                <Col lg={3} md={3} sm={6}>
                    <div  className="summaryCard">
                        <FontAwesomeIcon icon={faWarehouse} style={{color: "#ed5502", fontSize: "40px"}}/>
                        <h1 className="summaryTitle">
                            <CountUp start={0} end={560}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                            </VisibilitySensor>
                                )}
                            </CountUp>+</h1>
                        <p className="summarySubTitle">Total Area Sq</p>
                    </div>
                </Col>
                
                <Col lg={3} md={3} sm={6}>
                    <div  className="summaryCard">
                        <FontAwesomeIcon icon={faBuilding} style={{color: "#ed5502", fontSize: "40px"}} />
                        <h1 className="summaryTitle">
                            <CountUp start={0} end={197}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>K+</h1>
                        <p className="summarySubTitle">Apartments Sold</p>
                    </div>
                </Col>

                <Col lg={3} md={3} sm={6}>
                    <div  className="summaryCard">
                        <FontAwesomeIcon icon={faTrowel} style={{color: "#ed5502", fontSize: "40px"}} />
                        <h1 className="summaryTitle">
                            <CountUp start={0} end={268}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>+</h1>
                        <p className="summarySubTitle">Total Constructions</p>
                    </div>
                </Col>

                <Col lg={3} md={3} sm={6}>
                    <div  className="summaryCard">
                        <FontAwesomeIcon icon={faCouch} style={{color: "#ed5502", fontSize: "40px"}} />
                        <h1 className="summaryTitle">
                            <CountUp start={0} end={340}>
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>+</h1>
                        <p className="summarySubTitle">Apartio Rooms</p>
                    </div>
                </Col>

            </Row>
        </Container>
    </Fragment>
  )
}

export default Summary