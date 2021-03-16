import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export default function About() {
  return (
    <Container maxWidth="md">
      <div className="section">
        <h1 className="title">About</h1>
        <p>
          I discovered programming few years ago when I started to work as a
          tech Recruiter. I remember very well that I had an interview with
          someone for a Javascript Developer role, he had learned Javascript on
          his own just following the freecodecamp.org exercises. I got curious
          so I checked out the website that very same day.
        </p>
        <p>
          I remembered the first surprised when I wrote "Hello World" on the
          html and saw it on the screen. From that moment on, the idea of
          actually learn more about it kind of stayed in my brain. Kept doing
          some tutorials, free intro courses I could find here and there. But
          finally, in 2020 is when I took the desition to give this a try, so
          started to look for some information and in January 2021 I started the
          full time Fullstack Development bootcamp with Ironhack.
        </p>
      </div>
      <br></br>
      <hr></hr>
      <br></br>
      <div className="section">
        <h2 className="title">Hobbies & interests </h2>
        <p>
          Someone once told me I was a dangerous ensthusiastic person, and back
          then, I couldn't really understand what that person meant. Now, after
          I few years I get it, my list of hobbies gets longer every year and I
          am so enthusiastic about new things that I struggle to focus in only
          one hobbie. Here is a list of my favourite ones.
        </p>
        <div className="hobbies-section">
          <Card className="my-card">
            {" "}
            <img
              className="img-card"
              src="https://res.cloudinary.com/martacloud/image/upload/v1615821172/undraw_react_y7wq_toodlw.png"
            ></img>
            <CardContent className="tag">#React</CardContent>
          </Card>
          <Card className="my-card">
            {" "}
            <img
              className="img-card"
              src="https://res.cloudinary.com/martacloud/image/upload/v1615821172/undraw_Scrum_board_re_wk7v_qn3rt5.png"
            ></img>
            <CardContent className="tag">#Productivity</CardContent>
          </Card>
          <Card className="my-card">
            <img
              className="img-card"
              src="https://res.cloudinary.com/martacloud/image/upload/v1615821172/undraw_Devices_re_dxae_1_uexctb.png"
            ></img>
            <CardContent className="tag">#Responsive Design</CardContent>
          </Card>
          <Card className="my-card">
            {" "}
            <img
              className="img-card"
              src="https://res.cloudinary.com/martacloud/image/upload/v1615821280/undraw_Reading_re_29f8_yvktvf.png"
            ></img>
            <CardContent className="tag">#Reading</CardContent>
          </Card>
          <Card className="my-card">
            {" "}
            <img
              className="img-card"
              src="https://res.cloudinary.com/martacloud/image/upload/v1615821172/undraw_yoga_248n_1_kftb58.png"
            ></img>
            <CardContent className="tag">#Yoga</CardContent>
          </Card>
          <Card className="my-card">
            {" "}
            <img
              className="img-card"
              src="https://res.cloudinary.com/martacloud/image/upload/v1615821242/undraw_noted_pc9f_zirmy0.png"
            ></img>
            <CardContent className="tag">#Writing</CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
