import React from 'react'
import Slide from "react-reveal/Slide";
import Footer from './Footer'

export default function NotFound() {
    return (
        <Slide bottom>
        <div>
            <h2 className="title">Ups...seems like you want to got somewhere not found</h2>
            <h2>Perhaps you should try again :) </h2>
            <img src="https://res.cloudinary.com/martacloud/image/upload/v1615910902/undraw_Faq_re_31cw_amwnom.png"></img>
        </div>
        <Footer/>
        </Slide>
    )
}
