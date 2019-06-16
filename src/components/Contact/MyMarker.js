import React, { Component } from 'react';

import MarkerStyle from './MyMarker-Styles.css';

class MyMarker extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		   <div className = 'marker'>
			   <i className ="fas fa-map-marker-alt red"></i>
		      {this.props.text}
		   </div>
		);
	}	
}

export default MyMarker;

