import React, { Component } from "react";
import { Switch, Route } from "react-router";
import Overview from "./components/Overview";
import Projects from "./components/Projects";
import Teams from "./components/Teams";
import Employees from "./components/Employees";
import NotFound from "./components/NotFound";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Overview} />
        <Route path="/projects" component={Projects} />
        <Route path="/employees" component={Employees} />
        <Route path="/Teams" component={Teams} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}