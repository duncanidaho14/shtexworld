import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap/dist/react-bootstrap';
import  Root  from './../index'
import './NavbarSide.scss';
import Calendar from './../Calendar/Calendar'

class NavbarSide extends Component {
  render() {
    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/pseudo/`${:pseudo}`">Shtex <br/> World</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/maison/`${:pseudo}`">Maison</Nav.Link>
                    <Nav.Link href="/games/`${:pseudo}`">Jeux</Nav.Link>
                    <Nav.Link href="">Ecole</Nav.Link>
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