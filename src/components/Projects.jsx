import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Slide from "react-reveal/Slide";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import Footer from './Footer'


export default function Projects() {
  return (
    <Slide bottom>
      <Container maxWidth="md" className="my-container" id={'projects'}>
        
        <h1 className="title projects">Projects</h1>
        <div className="project-section">
          <a href="https://the-social-code.herokuapp.com/">

            <img
              className="project-screenshot"
              src="https://res.cloudinary.com/martacloud/image/upload/v1615887028/Captura_de_pantalla_2021-03-16_a_las_10.30.14-removebg-preview_hmhcf5.png"
              alt="project one"
            ></img>
          </a>

          <Card className="my-project-card">
            <CardContent className="project-card">
              <h4 className="title">
                <span>The Social Code</span>
              </h4>
              <p className="project-description">
                The Social Code is a fullstack web application, build as a
                personal project, with the idea of creating a platform that
                would allow developers to stay in touch.
              </p>
              
              <div className="techstack">
                <span className="highlight">#React</span>
                <span className="highlight">#NodeJs</span>
                <span className="highlight">#MongoDB</span>
                <span className="highlight">#Responsive</span>
                <span className="highlight">#MaterialUi</span>
                <span className="highlight">#Kanban</span>
              </div>
            
              <div className="project-link">
                <a href="https://the-social-code.herokuapp.com/">
                  <LanguageIcon /> Check it out!
                </a>
                <a href="https://github.com/marta8919/the-social-code-client">
                  <GitHubIcon /> Repository (client)
                </a>
                <a href="https://github.com/marta8919/the-social-code-server">
                  <GitHubIcon /> Repository (server)
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="project-section">
          <a href="http://flatme.herokuapp.com/">
            <img
              className="project-screenshot"
              src="https://res.cloudinary.com/martacloud/image/upload/v1615886771/Captura_de_pantalla_2021-03-16_a_las_10.25.43-removebg-preview_nr9mhy.png"
              alt="project 2"
            ></img>
          </a>
          <Card className="my-project-card">
            <CardContent className="project-card">
              <h4 className="title">Flatme</h4>
              <p className="project-description">
                Fullstack application, build with the idea to connect a
                community and allow them to share their reviews of districts
                around the world.
              </p>
              <div className="techstack">
    
                <span className="highlight">#NodeJs</span>
                <span className="highlight">#ExpressJs</span>
                <span className="highlight">#Bootstrap</span>
                <span className="highlight">#Responsive</span>
                <span className="highlight">#Kanban</span>
              </div>
              <div className="project-link">
                <a href="http://flatme.herokuapp.com/">
                  <LanguageIcon /> Check it out!
                </a>
                <a href="https://github.com/marta8919/flatme">
                  <GitHubIcon /> Respository
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="project-section">
          <a href="https://marta8919.github.io/veggie-wars-game/">
            <img
              className="project-screenshot"
              src="https://res.cloudinary.com/martacloud/image/upload/v1615886948/Captura_de_pantalla_2021-03-16_a_las_10.28.52-removebg-preview_drr9zs.png"
              alt="project 3"
            ></img>
          </a>
          <Card className="my-project-card">
            <CardContent className="project-card">
              <h4 className="title">Game</h4>
              <p className="project-description">
                First project after two weeks of study of Javascript. Basic
                game, the user must avoid the obstacles on the canvas and grab
                the prices to increase score.
              </p>
              <div className="techstack">
    
                <span className="highlight">#Javascript</span>
                <span className="highlight">#HTML</span>
                <span className="highlight">#CSS</span>
                <span className="highlight">#Kanban</span>
              </div>
              <div className="project-link">
                <a href="https://marta8919.github.io/veggie-wars-game/">
                  <LanguageIcon /> Check it out!
                </a>
                <a href="https://github.com/marta8919/veggie-wars-game">
                  <GitHubIcon /> Repository
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
      {/*<Footer/>*/}
    </Slide>
  );
}
