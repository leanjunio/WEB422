import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, NavItem } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/DropdownItem';

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <DropdownItem eventKey={3.1}>Action</DropdownItem>
            <DropdownItem eventKey={3.2}>Another action</DropdownItem>
            <DropdownItem eventKey={3.3}>Something else here</DropdownItem>
            <DropdownItem divider />
            <DropdownItem eventKey={3.4}>Separated link</DropdownItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    )
  }
}

export default Navigation