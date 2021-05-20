import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import Geocode from "react-geocode";
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor (props){
    super(props);
    Geocode.setApiKey("yourkeyhere");

    this.state = {
      markers: [],
      dbData: []
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
    // this.setState({
    //   markers: [],
    // })

    axios.get('http://localhost:5000/marker/')
    .then(res => {
      // log response
      //console.log(res);
      //return res

      //var data = res.data
      //const eventArray = data.map(event => {event._id, event.address});
      //console.log(data);

      let data = res.data

      console.log(data)

      let parsedData = [];
      let i;
      let markText;
      let obj;

      for (i=0; i< data.length; i++){
        obj = data[i];

        // build onClick marker description
        markText = "Event: " + obj.event + "\n"
        +   "Address: " + obj.address + "\n"
        +   "Date: " + obj.date + "\n"
        +   "Time: " + obj.time + "\n"
        +   "Description: " + obj.description;

        let addrLat, addrLng;

        // geocode address to generate address lat/long
        Geocode.fromAddress(obj.address).then(
          (response) => {
            const {lat, lng} = response.results[0].geometry.location;
            addrLat = lat;
            addrLng = lng;
          },
          (error) => {
            console.error(error);
          }
        );

        // generate array of parsed markers
        parsedData.push({_id: obj._id+"1", lat: addrLat, lng: addrLng, text: markText});
      }

      // this.setState ({
      //   markers : parsedData
      // })

      //console.log(parsedData);

      return data
    })
    .catch(function(error){
      console.log(error);
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