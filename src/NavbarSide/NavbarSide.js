import React, { Component, Fragment } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap/dist/react-bootstrap';
import './NavbarSide.scss';
import Calendar from './../Calendar/Calendar'

class NavbarSide extends Component {
  render() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Shtex <br/> World</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Maison</Nav.Link>
                    <Nav.Link href="#features">Jeux</Nav.Link>
                    <Nav.Link href="#pricing">Ecole</Nav.Link>
                    <Calendar />
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </Fragment>
    );
  }
}

export default NavbarSide;