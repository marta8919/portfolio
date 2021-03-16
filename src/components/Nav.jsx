import React from "react";
import {Navbar} from 'react-bootstrap'

export default function Nav() {
  return (
    <div className="my-nav">
      <Navbar>
        <a href="/"><img src="https://res.cloudinary.com/martacloud/image/upload/v1615807956/logopro_kgmgzl.png" className="nav-logo"></img></a>
        <div>
        <a href="/" className="my-navlink">Home</a>
        <a href="/projects" className="my-navlink">Projects</a>
        <a href="/contact" className="my-navlink">Contact</a>
        </div>
      </Navbar>
    </div>
  );
}
