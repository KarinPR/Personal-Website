import React, { Component } from 'react';

class MyMarker extends Component {


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

