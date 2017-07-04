import React, { Component } from 'react';
import '../styles/App.css';

export default class Search extends Component {

	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event
		});
	}

	render () {
		return (
			<div className="Search-bar">
				<div className="Search-bar-intro">
					Search reviews for your favorite game!
				</div>
				<div>value is '{this.value}'</div>
			</div>
		)
	}
}
