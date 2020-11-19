import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


import Navbar from "./components/navbar.component";
import Map from "./components/map.component";
import CreateMarker from "./components/create-user.component";
import CreateUser from "./components/create-user.component";

// currently only accomodates one map (current)
function App() {
  return (
    <Router>
      <br/>
      <Route path="/" exact component={Map} />
      <Route path="/edit/:id" component={EditMap} />
      <Route path="/create" component={CreateMarker} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
