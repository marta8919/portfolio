import { React } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/MyNav";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="main">
      <Navbar />
      <Switch>

      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="/about" component={About} />
      <Route exact={true} path="/projects" component={Projects} />
      <Route exact={true} path="/contact" component={Contact} />
      <Route path='/404' component={NotFound}/>
      <Redirect from="*" to='/404' />
      </Switch>
    </div>
  );
}

export default App;
