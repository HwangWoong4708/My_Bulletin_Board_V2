import React from "react";
import { Navbar } from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Bulletin Board v2</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
