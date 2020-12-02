import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import Map from "./components/map.component";
import CreateMarker from "./components/create-marker.component";
import EditMarker from "./components/edit-marker.component";
// import CreateUser from "./components/create-user.component";

// currently only accomodates one map (current)
function App() {
  return (
    <Router>
      <Navbar/>
      <br/>
      <Route path="/" exact component={Map} />
      <Route path="/edit/:id" component={EditMarker} />
      <Route path="/createMarker" component={CreateMarker} />
      {/*<Route path="/createUser" component={CreateUser} /> */}
    </Router>
  );
}

export default App;
