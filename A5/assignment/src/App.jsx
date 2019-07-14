import React, { Component } from "react";
import { Switch, Route } from "react-router";
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
        <Route path="/Teams" render={Teams} />
        <Route render={NotFound} />
      </Switch>
    );
  }
}

export default App;
