import React, { Component } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import ProjectsPanel from './ProjectsPanel';
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel';

const MainContainer = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContainer