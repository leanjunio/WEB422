import React, { Component } from "react";

export default class Overview extends Component {
  render() {
    return (
      <MainContainer>
        <h1 className="page-header">Overview</h1>
        <div className="row">
          <div className="col-md-4">
            <ProjectsPanel />
          </div>
          <div className="col-md-4">
            <TeamsPanel />
          </div>
          <div className="col-md-4">
            <EmployeesPanel />
          </div>
        </div>
      </MainContainer>
    );
  }
}
