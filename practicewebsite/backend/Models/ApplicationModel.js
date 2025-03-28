const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number
})

const applicationModel = mongoose.model('Applications', applicationSchema);

module.exports = applicationModel;
