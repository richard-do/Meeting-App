import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateMarker extends Component{

    constructor(props){
        super(props);

        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // create all variables in state
        this.state = {
            address : '',
            date : new Date(),
            time: '',
            event : '',
            description: ''
        }
    }

    // update address
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    // update Date
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        })
    }

    // update event
    onChangeEvent(e) {
        this.setState({
            event: e.target.value
        })
    }

    // update description
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    // update Time
    onChangeTime(e) {
        this.setState({
            time: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const marker = {
            address: this.state.address,
            time: this.state.time,
            description: this.state.description,
            event: this.state.event,
            date: this.state.date
        }

        axios.post('http://localhost:5000/marker/add', marker)
            .then(result => console.log(result.data));

        // bring back to map after adding marker
        window.location = '/';
    }

    render(){
        return (
            <div>
                <h3>Create New Marker</h3>

                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Event: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.event}
                            onChange={this.onChangeEvent}
                        />
                    </div>

                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                        />
                    </div>

                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onChangeDate}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Time: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.time}
                            onChange={this.onChangeTime}
                        />
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Marker" className="btn btn-primary"/>
                    </div>
                </form>

                <p>In CreateMarker component.</p>
            </div>
        )
    }
}