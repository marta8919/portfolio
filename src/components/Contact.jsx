import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import Slide from "react-reveal/Slide";
import Footer from "./Footer";

export default function Contact() {
  return (
    <Slide bottom>
      <div className="contact-page">
        <h2 className="title">Questions?</h2>
        <h3 className="title">Get in touch!</h3>
        <div className="contact-links">
          <a href="#">
            <GitHubIcon />
          </a>
          <a href="#">
            <LinkedInIcon />
          </a>
          <a href="#">
            <AlternateEmailIcon />
          </a>
        </div>
        <img src="https://res.cloudinary.com/martacloud/image/upload/v1615913030/undraw_online_test_gba7_uktwct.png"></img>
      </div>
      <Footer />
    </Slide>
  );
}
