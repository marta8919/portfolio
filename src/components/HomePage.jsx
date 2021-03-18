import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Container from "@material-ui/core/Container";
import InfoIcon from "@material-ui/icons/Info";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <div className="intro-page">
        <Container maxWidth="md">
          <Typist className="fake-code">
            <h5>
              Hola!
              <br></br> 
              I am Marta,
              <strong> Frontend Developer</strong> 🚀 
             <br></br> What do you want to explore?
            </h5>
            <br></br>

            <div className="my-group-btn">
              <Link className="my-link" to={"/about"}>
                <InfoIcon /> About
              </Link>
              <Link className="my-link" to={"/projects"}>
                <AccountTreeIcon /> Projects
              </Link>

              <Link className="my-link" to={"/contact"}>
                <ContactMailIcon /> Contact
              </Link>
            </div>
          </Typist>
        </Container>
      </div>
    </>
  );
}
