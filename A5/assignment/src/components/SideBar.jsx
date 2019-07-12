import React, { Component } from 'react'

export default class SideBar extends Component {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<div className="col-sm-3 col-md-2  sidebar">
				<ul className="nav nav-sidebar">
					<li className="active"><a href="/">Overview <span className="sr-only">(current)</span></a></li>
				</ul>
				<ul className="nav nav-sidebar">
					<li className={(this.props.highlight === 'Projects') ? 'active' : ''}><a href="/projects">Projects</a></li>
					<li><a href="/teams">Teams</a></li>
					<li><a href="/employees">Employees</a></li>
				</ul>
			</div>
		)
	}
}