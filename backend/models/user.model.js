const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// changes will be made later

const userSchema = new Schema({
    username: {type: String, required: true},
    date: {type: Date, required: true},
},{
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;