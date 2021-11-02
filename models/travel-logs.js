const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    name: {type: String, required: true},
    city: String,
    landmark: String,
    image: String,
    rating: Number
});

const Logs = mongoose.model('Log', logSchema);

module.exports = Logs;
