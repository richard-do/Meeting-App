import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor (props){
    super(props);
    this.state = {
      markers: [],
      markerList: []
    };
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
      // testing multiple markers through componentDidMount()
      markers: [{lat: '43.5892', lng: '-79.6423', text: 'My Marker (Sq1)'},
                {lat: '43.6000', lng: '-79.6423', text: 'My Marker (Test)'}]
    });
  }

  getData(){
    // this.setState({
    //   markers: [],
    // })

    axios.get('http://localhost:5000/marker/')
    .then(res => {
      // log response
      console.log(res);
      return res
    })
    .catch(err => {
      console.log(err);
      return err
    })
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

        <div>
        <p id="response">test</p>
        <button onClick={this.getData}>Get Data
        </button>
        </div>

      </div>
    );
  }
}

export default Map;