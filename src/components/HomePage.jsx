import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Container from "@material-ui/core/Container";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import InfoIcon from '@material-ui/icons/Info';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default function HomePage() {

  return (
    <>
      <div className="intro-page">
        <Container maxWidth="md">
          <Typist className="fake-code">
            <h3>Hello, Hallo, Hola!</h3>
            <h3>I am Marta, a <strong>Frontend Developer</strong> 🚀 </h3>
            <h3>Thank you for visiting my website!</h3>
            <h3>Do you want to explore more?</h3>
              <ButtonGroup
                variant="filled"
                aria-label="text primary button group"
              >
                <a className="my-link" href="/about"><InfoIcon/> About</a>
                <a className="my-link"  href="/projects"><AccountTreeIcon/> Projects</a>
                <a className="my-link" href="/contact"><ContactMailIcon/> Contact</a>
              </ButtonGroup>
          </Typist>
        </Container>
      </div>
    </>
  );
}
