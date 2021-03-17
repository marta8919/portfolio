import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Container from "@material-ui/core/Container";
import InfoIcon from "@material-ui/icons/Info";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ContactMailIcon from "@material-ui/icons/ContactMail";

export default function HomePage() {
  return (
    <>
      <div className="intro-page">
        <Container maxWidth="md">
          <Typist className="fake-code">
            <h5>
              Hello, Hallo, Hola!
              <br></br> 
              I am Marta,
              <strong> Frontend Developer</strong> 🚀 
              <br></br>Thank you for visiting my
              website! <br></br> Do you want to explore more?
            </h5>
            <br></br>

            <div className="my-group-btn">
              <a className="my-link" href="/about">
                <InfoIcon /> About
              </a>
              <a className="my-link" href="/projects">
                <AccountTreeIcon /> Projects
              </a>

              <a className="my-link" href="/contact">
                <ContactMailIcon /> Contact
              </a>
            </div>
          </Typist>
        </Container>
      </div>
    </>
  );
}
