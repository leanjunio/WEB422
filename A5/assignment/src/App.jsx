import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Teams from "./components/Teams";
import Employees from "./components/Employees";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={Overview} />
        <Route path="/projects" render={Projects} />
        <Route path="/employees" render={Employees} />
        <Route render={NotFound} />
      </Switch>
    );
  }
}

export default App;
