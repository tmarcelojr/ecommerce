import React from 'react';
import { Navbar, Nav, Container, Row } from 'react-bootstrap'


const Header = () => {
    return (
        <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart">Cart</i></Nav.Link>
              <Nav.Link href="/login"><i className="fas fa-user">Login</i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;
