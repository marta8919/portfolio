import React from "react";
import Slide from "react-reveal/Slide";
import Footer from "./Footer";
import Container from "@material-ui/core/Container";

export default function NotFound() {
  return (
    <>
      <Slide right>
        <Container maxWidth="md" className="my-container">
          <div className="contact-page">
            <h2 className="title">
              Ups...seems like you want to got somewhere not found
            </h2>
            <h3>Perhaps you should try again :) </h3>
            <img
              className="contact-img"
              src="https://res.cloudinary.com/martacloud/image/upload/v1615910902/undraw_Faq_re_31cw_amwnom.png"
              alt="not found"
            ></img>
          </div>
        </Container>
      </Slide>
      <Footer />
    </>
  );
}
