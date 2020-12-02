import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navBar-brand">App Name here</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <Link to="/" className="nav-link">Map</Link>
                    </li>
                    <li>
                        <Link to="/createMarker" className="nav-link">Create Marker</Link>
                    </li>
                    <li>
                        <Link to="/editMarker" className="nav-link">Edit Marker</Link>
                    </li>
                </ul>
            </div>
            </nav>
        );
    }
}