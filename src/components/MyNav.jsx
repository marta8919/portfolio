import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from 'react-router-dom'

export default function MyNav() {
  return (
    <Navbar expand="lg" className="my-nav" fixed="top">
      <Navbar.Brand href="/"><img src="https://res.cloudinary.com/martacloud/image/upload/v1615807956/logopro_kgmgzl.png" className="nav-logo" alt="logo"></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ml-auto">
         <Link to={"about"} className="mynav-link">About</Link>
         <Link to={"/projects"} className="mynav-link">Projects</Link>

         <Link to={"/contact"} className="mynav-link">Contact</Link>
         <a href="https://martagg.medium.com/" className="mynav-link">Blog</a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
