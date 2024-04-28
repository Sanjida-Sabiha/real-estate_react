import React, { Fragment, useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton, ControlBar, ForwardControl, ReplayControl, VolumeMenuButton} from 'video-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import vedio from '../../assets/images/projects/feature-6.jpg';

const VideoPlay = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>
        <Container fluid={true} className="vedioBg pt-120 pb-120">
            <div className="vedioBgOverlay"></div>
            <Container>
              <Row>
                <Col>
                  <p onClick={handleShow}><FontAwesomeIcon className="playBtn" icon={faCirclePlay} style={{"--fa-primary-color": "#ff3300", "--fa-secondary-color": "#fdfcfc",}} /></p>

                  <Modal size="lg" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                      <Player poster={vedio}>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <BigPlayButton position="center" />
                        <ControlBar autoHide={false}>
                          <ReplayControl seconds={10} order={2.2} />
                          <ForwardControl seconds={10} order={3.2} />
                          <VolumeMenuButton />
                        </ControlBar>  
                      </Player>
                    </Modal.Body>
                    <Modal.Footer>
                      
                    </Modal.Footer>
                  </Modal>
                </Col>
              </Row>
            </Container>
        </Container>
    </Fragment>
  )
}

export default VideoPlay