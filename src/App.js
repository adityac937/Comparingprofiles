import React, { Component } from "react";
import Compare from "./Components/Compare/Compare";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Results from "./Components/Results/Results";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/compare" component={Compare} />
            <Route path="/compare/results" component={Results} />
            {/* <Route path="/results" component={Results} /> */}
            <Route
              render={function () {
                return (
                  <p className="design">
                    Page Not Found , Please try recommmended Navigations Above
                  </p>
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
