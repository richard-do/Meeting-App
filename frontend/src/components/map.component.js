import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import Geocode from "react-geocode";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor (props){

    super(props);
    this.updateData = this.updateData.bind(this);
    Geocode.setApiKey("xxx");

    this.state = {
      markers: []
    };
  }

  static defaultProps = {
    center: {
      lat: 43.5892,
      lng: -79.6423
    },
    zoom: 11
  };

  updateData(){

    axios.get('http://localhost:5000/marker/')
    .then(res => {

      // grab unformatted event data from database
      let data = res.data
      let markers = [];

      // loop through events
      for (let i=0; i< data.length; i++){
        let obj = data[i];

        // use geocoder to grab address associated with event
        Geocode.fromAddress(obj.address).then(
          (response) => {
            // build onClick marker description
            let markerText = "Event: " + obj.event + "\n"
            +   "Address: " + obj.address + "\n"
            +   "Date: " + obj.date + "\n"
            +   "Time: " + obj.time + "\n"
            +   "Description: " + obj.description;

            // attach the location to result
            let result = response.results[0].geometry.location
            markers.push({key: obj._id+"1", lat: result.lat,
            lng:result.lng, text: markerText});

            // render marker when updated
            this.setState({markers});
          },
          (error) => {
            console.error(error);
          }
        );
      }
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
                key = {marker.key}
                lat = {marker.lat}
                lng = {marker.lng}
                text = {marker.text}
              />
            )
          })}

        </GoogleMapReact>

        <div>
          <p id="response">test</p>
          <button onClick={()=>this.updateData()}>Get Data</button>
        </div>

      </div>
    );
  }
}

export default Map;