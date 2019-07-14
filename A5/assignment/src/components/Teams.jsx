import React, { Component } from "react";
import axios from "axios";
import MainContainer from "./MainContainer";

export default class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: []
    };
  }
  componentDidMount() {
    axios
      .get("https://teams-api-lean.herokuapp.com/teams")
      .then(res => this.setState({ teams: res.data }));
  }
  render() {
    return (
      <MainContainer sidebar="Teams">
        <h1 className="page-header">Teams</h1>
        <div className="row">
          <div className="container-fluid">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.teams.map(team => (
                  <tr key={team._id}>
                    <td>{team.TeamName}</td>
                    <td>
                      <ul>
                        {team.Projects.map(project => (
                          <li>{project.ProjectName}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{team.Employees.length}</td>
                    <td>{`${team.TeamLead.FirstName} ${team.TeamLead.LastName}`}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </MainContainer>
    );
  }
}
