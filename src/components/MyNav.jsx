import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"

export default function MyNav() {
  return (
    <Navbar expand="lg" className="my-nav" fixed="top">
      <Navbar.Brand href="/"><img src="https://res.cloudinary.com/martacloud/image/upload/v1615807956/logopro_kgmgzl.png" className="nav-logo"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/about" className="mynav-link">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/projects" className="mynav-link">Projects</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact" className="mynav-link">Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
