const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mapSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, required: true},
    authorizedUsers: { type : Array , "default" : [] },
    markers: { type : Array , "default" : [] },
},{
    timestamps: true,
});

const Map = mongoose.model('Map', mapSchema);

module.exports = Map;