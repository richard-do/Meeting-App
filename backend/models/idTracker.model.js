const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// the purpose of this file isn't necessarily to track data
// but rather to use a roundabout method of tracking where we are
// in terms of IDs, and to see what is and what is not in use

const trackerSchema = new Schema({
    user_id: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },

    group_id: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },

    map_id: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },

    freeGroupId: {
        type: Array,
        required: false,
        unique: true
    },

    freeMapId: {
        type: Array,
        required: false,
        unique: true
    }
},
{
    timestamps: true,
});

const idTracker = mongoose.model('idTracker', trackerSchema);

module.exports = User;