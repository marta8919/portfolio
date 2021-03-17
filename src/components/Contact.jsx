import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Slide from "react-reveal/Slide";
import Footer from "./Footer";
import Container from "@material-ui/core/Container";

export default function Contact() {
  return (
    <Slide right>
      <Container maxWidth="md" className="my-container">
        <div className="contact-page">
          <h2 className="title">Questions?</h2>
          <h3 className="title">Get in touch!</h3>
          <div className="contact-links">
            <a href="https://github.com/marta8919">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/martagilabertgu/">
              <LinkedInIcon />
            </a>
            <a href="mailto:info@martagg.com">
              <AlternateEmailIcon />
            </a>
          </div>
          <img className="contact-img" src="https://res.cloudinary.com/martacloud/image/upload/v1615913030/undraw_online_test_gba7_uktwct.png"></img>
        </div>
      </Container>

      <Footer />
    </Slide>
  );
}
