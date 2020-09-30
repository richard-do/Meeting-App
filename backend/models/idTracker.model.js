const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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

const idTracker = mongoose.model('idTracker', userSchema);

module.exports = User;