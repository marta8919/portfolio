import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Footer from "./Footer";
import Slide from "react-reveal/Slide";



export default function About() {
  return (
    <>
      <Slide bottom>
        <Container maxWidth="md" className="my-container">
          <div className="section">
            <h1 className="title">About</h1>
            <p>
              I discovered programming few years ago when I started to work as a
              tech Recruiter. I remember very well that I had an interview with
              someone for a Javascript Developer role, he had learned Javascript
              on his own just following the freecodecamp.org exercises. I got
              curious so I checked out the website that very same day.
            </p>
            <p>
              I remember the first surprised when I wrote "Hello World" on the
              html and saw it on the screen. From that moment on, the idea of
              actually learn more about it kind of stayed in my brain. Kept
              doing some tutorials, free intro courses I could find here and
              there. But finally, in 2020 is when I took the desition to give
              this a try, so started to look for some information and in January
              2021 I started the full time Fullstack Development bootcamp with
              Ironhack.
            </p>
          </div>

          <hr></hr>

          <div className="section">
            <h2 className="title">Hobbies & interests </h2>
            <p>
              Someone once told me I was a dangerous ensthusiastic person, and
              back then, I couldn't really understand what that person meant.
              Now, after a few years I get it, my list of hobbies & interests gets longer
              every year. Here is a list of my favourite ones.
            </p>
            <div className="hobbies-section">
              <Card className="my-card">
                <img
                  className="img-card"
                  src="https://res.cloudinary.com/martacloud/image/upload/v1615912463/undraw_media_player_ylg8_px5fsc.png"
                alt="frontend"></img>
                <CardContent className="tag">#Frontend</CardContent>
              </Card>
              <Card className="my-card">
                <img
                  className="img-card"
                  src="https://res.cloudinary.com/martacloud/image/upload/v1615911655/undraw_To_do_re_jaef_gwdxck.png"
                  alt="productivity"
                ></img>
                <CardContent className="tag">#Productivity</CardContent>
              </Card>
              <Card className="my-card">
                <img
                  className="img-card"
                  src="https://res.cloudinary.com/martacloud/image/upload/v1615911744/undraw_Images_re_0kll_1_ij3dwa.png"
                  alt="responsive"
                ></img>
                <CardContent className="tag">#Responsive</CardContent>
              </Card>
              <Card className="my-card">
                <img
                  className="img-card"
                  src="https://res.cloudinary.com/martacloud/image/upload/v1615911639/undraw_Books_l33t_ynfnot.png"
                  alt="reading"
                ></img>
                <CardContent className="tag">#Reading</CardContent>
              </Card>
              <Card className="my-card">
                <img
                  className="img-card"
                  src="https://res.cloudinary.com/martacloud/image/upload/v1615911785/undraw_social_serenity_vhix_xiqlnt.png"
                  alt="yoga"
                ></img>
                <CardContent className="tag">#Yoga</CardContent>
              </Card>
              <Card className="my-card">
                <img
                  className="img-card"
                  src="https://res.cloudinary.com/martacloud/image/upload/v1615911911/undraw_online_resume_re_ru7s_cinz2u.png"
                  alt="writing"
                ></img>
                <CardContent className="tag">#Writing</CardContent>
              </Card>
            </div>
          </div>
        </Container>
        <Footer />
      </Slide>
    </>
  );
}
