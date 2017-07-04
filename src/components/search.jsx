import React, { Component } from 'react';
import '../styles/App.css';

class Search extends Component {

	constructor(props) {
		super(props);
		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	render () {
		return (
			<div className="Search-bar">
				<div className="Search-bar-intro">
					Search reviews for your favorite game!
				</div>
				<input
					type="text"
					placeholder="Search here"
					value={this.value}
					onChange={this.handleChange}
				/>
				<div>value is `{this.state.value}`</div>
			</div>
		);
	}
}

export default Search;
