import React from "react";
import "./App.scss";
import Nav from "./nav";
import Home from "./Home";
import Contact from "./contact";
import About from "./About";
import FilmDetail from "./filmDetail";
import Nasa from "./nasa";
import Meteo from "./meteo";
import Image_anim from "./image_transition_gsap";
import TodoApp from "./todoApp";

import Home2 from "./page image transition/home2";
import Page2 from "./page image transition/2nd_page";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const imageDetails = {
    width: 300,
    height: 450,
  };
  return (
    <Router>
      <div className="App" style={{ position: "relative" }}>
        <Nav />
        <Route
          render={({ location }) => (
            <AnimatePresence initial={false} exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/nasa" exact component={Nasa} />
                <Route path="/meteo" exact component={Meteo} />
                <Route path="/about/:id" component={FilmDetail} />
                <Route path="/image_anim" exact component={Image_anim} />
                <Route path="/todoApp" exact component={TodoApp} />
                <Route
                  path="/app2"
                  exact
                  render={() => <Home2 imageDetails={imageDetails} />}
                />
                <Route
                  path="/page"
                  exact
                  render={() => <Page2 imageDetails={imageDetails} />}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
      </div>
    </Router>
  );
}

export default App;
