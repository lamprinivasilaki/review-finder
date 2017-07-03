import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../styles/App.css';

export default class Search extends Component {

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render () {
		return (
			<div className="Search-bar">
				<div className="Search-bar-intro">
					Search reviews for your favorite game!
				</div>
				<SearchBar
					onChange={() => console.log('onChange')}
					onRequestSearch={() => console.log('onRequestSearch')}
					style={{
						margin: '0 auto',
						maxWidth: 800
					}}
				/>
			</div>
		)
	}
}

Search.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};

// export default class Search
