import React, { Fragment, useState, useEffect } from 'react'
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/custom.css"
import {Container, Button, Form, Nav, Navbar} from 'react-bootstrap';
import logo from "../../assets/images/logo-2.png"

const NavBar = () => {
    const [scroll, setScroll]=useState(
        {

            navBackground:'navBackground',
            navItem:'navItem',
            navSearch:'navSearch',
        }
    );
    const onScroll=()=>{
        if(window.scrollY>30){
            setScroll({navBackground:'navBackgroundScroll', navItem:'navItemScroll', navSearch:'navSearchScroll'})
        }else if(window.scrollY<30){
            setScroll({navBackground:'navBackground', navItem:'navItem', navSearch:'navSearch'})
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',onScroll);
    }, []);
  return (
    <Fragment>
        <Container className="navBar">
            <Navbar fixed="top" expand="lg" className={scroll.navBackground}>
                <Container fluid>
                    <Navbar.Brand className="navBarTitle"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="navBarMain" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link className={scroll.navItem}>Home</Nav.Link>
                            <Nav.Link className={scroll.navItem}>About</Nav.Link>
                            <Nav.Link className={scroll.navItem}>Shop</Nav.Link>
                            <Nav.Link className={scroll.navItem}>News</Nav.Link>
                            <Nav.Link className={scroll.navItem}>Page</Nav.Link>
                            <Nav.Link className={scroll.navItem}>Contact</Nav.Link>
                        </Nav>
                        <Form className="navForm">
                            <Form.Control type="search" placeholder="Search" className={scroll.navSearch}/>
                            <Button className="navButton">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    </Fragment>
    
  )
}

export default NavBar