import React from "react";
import "react-typist/dist/Typist.css";
import Container from "@material-ui/core/Container";
import InfoIcon from "@material-ui/icons/Info";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import {Link} from "react-router-dom";
import NotesIcon from "@material-ui/icons/Notes";


export default function HomePage(props) {


    return (
        <>
            <div className="intro-page" id='app'>
                <Container maxWidth="md">

                    <h4>

                        Hi there! I am Marta,
                        <strong> Frontend Developer</strong> 🚀
                        <br></br>
                        <br></br> What do you want to explore?
                    </h4>

                    <br></br>

                    <div className="my-group-btn">
                        <Link className="my-link" to={"/about"}>
                            <InfoIcon/> About
                        </Link>
                        <Link className="my-link" to={"/projects"}>
                            <AccountTreeIcon/> Projects
                        </Link>

                        <Link className="my-link" to={"/contact"}>
                            <ContactMailIcon/> Contact
                        </Link>
                        <a className="my-link" href="https://martagg.medium.com/">
                            <NotesIcon/>
                            Blog
                        </a>
                    </div>
                </Container>
            </div>
        </>
    );
}
