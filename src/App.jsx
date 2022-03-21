import {MouseEventHandler, React, useEffect, useState} from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Main from './components/Main'
import OLDNav from './components/MyNav';
import NewAbout from './components/About/NewAbout'
import Experience from './components/Experience/Experience'
import NewProjects from "./components/NewProjects";
import BackHome from "./components/BackHome";
import GetInTouch from "./components/GetInTouch";

function App(props) {

    const backHome = ()=>{
        let element= document.getElementById('home')
        if(element) element.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }

  return (
    <div className="main">
        <Navbar/>
        {/*<OLDNav/>*/}
        <Main/>
        {/*<HomePage/>*/}
        {/*<About id={'about'}/>*/}
        <NewAbout/>
        {/*<Experience/>*/}
        <NewProjects/>
        {/*<Projects/>*/}
        <GetInTouch/>
        <BackHome action={backHome}/>
        <Footer />
      <Switch>
      <Route path='/404' component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
