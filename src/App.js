import React from "react";
import "./App.css";
import Nav from "./nav";
import Home from "./Home";
import Contact from "./contact";
import About from "./About";
import FilmDetail from "./filmDetail";
import Nasa from "./nasa";
import Meteo from "./meteo";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/nasa" exact component={Nasa} />
          <Route path="/meteo" exact component={Meteo} />
          <Route path="/about/:id" component={FilmDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
