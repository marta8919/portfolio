import React from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import About from "./About";
import Container from '@material-ui/core/Container';

export default function HomePage() {
  return (
    <>
      <div className="intro-page">
        <div className="intro">
        <Container maxWidth="sm">
          <Typist>
            <h2>Hello, Hallo, Hola!</h2>
            <h2>I am Marta, a Frontend developer</h2>
            <h2>and this is my portfolio</h2>
            <h3>👩‍💻</h3>
          </Typist>
        </Container>
        </div>
      </div>
      <About />
    </>
  );
}
