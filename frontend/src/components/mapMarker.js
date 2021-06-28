import React from 'react';
import RedMarker from '../images/map-marker.svg';

class MapMarker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <img src={RedMarker}
              height= "20rem"
              width= "20rem"
              alt="marker"
        />
    )
  }
}

export default MapMarker;