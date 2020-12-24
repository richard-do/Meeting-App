import React, {Component} from 'react';

export default class CreateMarker extends Component{

    constructor(props){
        super(props);

        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeEvent = this.onChangeEvent.bind(this);

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
            username: e.target.value
        });
    }

    // update Date
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    // update event
    onChangeEvent(e) {
        this.setState({
            event: e.target.value
        });
    }

    // update description
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    // update Time
    onChangeTime(e) {
        this.setState({
            time: e.target.value
        });
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

        console.log(marker);

        // bring back to map after adding marker
        window.location = '/';
    }

    render(){
        return (
            <div>
                <p>In CreateMarker component.</p>
            </div>
        )
    }
}