import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';


export default class Header extends Component {
  render() {
    return (
		<div className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h2>Welcome to Review Finder</h2>

			<p className="App-intro">
				Find reviews from your favorite games on Review Finder.
			</p>
		</div>
	);
  }
}
