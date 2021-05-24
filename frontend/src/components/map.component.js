import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import Geocode from "react-geocode";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor (props){

    super(props);
    this.updateData = this.updateData.bind(this);
    this.getCoordinate = this.getCoordinate.bind(this);
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

  componentDidMount(){
    this.setState({
      // testing multiple markers through componentDidMount()
      markers: [{lat: '43.5892', lng: '-79.6423', text: 'My Marker (Sq1)'},
                {lat: '43.6000', lng: '-79.6423', text: 'My Marker (Test)'}]
    });
  }

  updateData(){

    axios.get('http://localhost:5000/marker/')
    .then(res => {

      // grab unformatted event data from database
      let data = res.data

      let markers = [];
      let markerText;
      let locationData = [];

      // loop through events
      for (let i=0; i< data.length; i++){
        let obj = data[i];

        // build onClick marker description
        markerText = "Event: " + obj.event + "\n"
        +   "Address: " + obj.address + "\n"
        +   "Date: " + obj.date + "\n"
        +   "Time: " + obj.time + "\n"
        +   "Description: " + obj.description;

        // gets the address using geocoder
        this.getCoordinate(obj.address)
          .then(function(location){
            locationData = location;
         });

      // push the completed marker into markers array
      markers.push({_id: obj._id+"1", lat: locationData.lat,
      lng:locationData.lng, text: markerText});

      }

      // update markers with parsed data from database
      this.setState ({markers});

      return data
    });
  }

  // gets the coordinates of an address using geocoder
  async getCoordinate(address){
        let result;
        // geocode address to generate address lat/long
        await Geocode.fromAddress(address).then(
          (response) => {
            // attach the location to result
            result = response.results[0].geometry.location;
          },
          (error) => {
            console.error(error);
          }
        );

        // return the location resulting from geocoder
        return result;
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

        </GoogleMapReact>

        <div>
        <p id="response">test</p>
        <button onClick={this.updateData}>Get Data
        </button>
        </div>

      </div>
    );
  }
}

export default Map;