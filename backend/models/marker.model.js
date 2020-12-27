const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// changes will be made later

const markerSchema = new Schema({
    address: {type: String, required: true},
    date: {type: Date, required: true},
    time: {type: String, required: true},
    event: {type: String, required:true},
    description: {type: String, required: true}
},{
    timestamps: true,
});

const Marker = mongoose.model('Marker', markerSchema);

module.exports = Marker;