import React from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import TwitterIcon from "@material-ui/icons/Twitter";


export default function GetInTouch(){

    return(
        <div className={'general_wrapper_about'} id={'contact'}>
            <div className={'contact_section_wrapper'}>
                <p className={'general_title'}>Questions?</p>
                <p className={'general_sub_title'}>Get in touch</p>
                <div className={'contact_links'}>
                    <a href={'https://github.com/marta8919'}><GitHubIcon/></a>
                    <a href={'https://www.linkedin.com/in/martagilabertgu/'}><LinkedInIcon/></a>
                    <a href={'https://twitter.com/martagigu89'}><TwitterIcon/></a>
                    <a href={'mailto:info@martagg.com'}><AlternateEmailIcon/></a>
                </div>
                <iframe  className={'giphy'} src="https://giphy.com/embed/l46Cq6Bro9CsP149q" width="480" height="480" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
    )
}