import { React } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import Navbar from "./components/MyNav"
import About from './components/About'
import HomePage from './components/HomePage'
import Projects from './components/Projects'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="main">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route
            render={() => {
              return <NotFound />;
            }}
          />
      </Switch>
    </div>
  );
}

export default withRouter(App);
