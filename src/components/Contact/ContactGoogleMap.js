import React, { Component } from 'react';

import GoogleMap from 'google-map-react';
import Styled from 'styled-components';

import MyMarker from './MyMarker'
// import Contact from './Contact'

const Map = Styled.div`
	border: 7px solid var(--success);
	border-radius: 12px;
}
@media (max-width: 1024px) {
  width: 50vw;
  height: 50vh;
  margin-left: 0;
}		
`;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class ContactGoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 31.7758579,
      lng: 34.6367863
    },
    language: 'eng',
    zoom: 15
  };


    constructor(props) {
	    super(props);
	}

  render() {
    return (
      // Important! Always set the container height explicitly
      <Map  className = 'map-style' style={{ height: '50vh', width: '100%', boxShadow: '0 1px 1px 25px rgba(0, 0, 0, .8)' }}>
        <GoogleMap
	       
			bootstrapURLKeys={{ key: 'AIzaSyD9Bsk2YHyvamJx0zy-EEat4D6ajVQGYyg' }}
			defaultCenter={this.props.center}
			defaultZoom={this.props.zoom}
			defaultLanguage = {this.props.language}
			yesIWantToUseGoogleMapApiInternals
        >
          <MyMarker
            lat={this.props.center.lat}
            lng={this.props.center.lng}
            text={''}
          />
        </GoogleMap>
	    {/*<Contact />*/}
      </Map>
    );
  }
}

export default ContactGoogleMap;