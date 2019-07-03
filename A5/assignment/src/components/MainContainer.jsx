import React, { Component } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

export default class MainContainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}