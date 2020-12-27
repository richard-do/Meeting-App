import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  constructor (props){
    super(props);
    this.state = {
      markers: [],
    }
  }

  static defaultProps = {
    center: {
      lat: 43.5892,
      lng: -79.6423
    },
    zoom: 11
  };

  componentDidMount(){
    this.setState({
      // will need to be able to make queries to db to handle this part
      markers: [{lat: '43.5892', lng: '-79.6423', text: 'My Marker (Sq1)'},
                {lat: '43.6000', lng: '-79.6423', text: 'My Marker (Test)'}]
    });
  }
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          {this.state.markers.map((marker, i) => {
            return(
              <AnyReactComponent
                lat = {marker.lat}
                lng = {marker.lng}
                text = {marker.text}
              />
            )
          })}

          {/* <AnyReactComponent
            lat={43.5892}
            lng={-79.6423}
            text="My Marker (Mississauga)"
          />

          <AnyReactComponent
            lat={43.6000}
            lng={-79.6423}
            text="My Marker (Testx)"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;