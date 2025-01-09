const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    type: { type: String, required: true },
    code: { type: String, required: true },
    amount: { type: Number, required: true },
    detail: { type: Array, required: true }
});

module.exports = mongoose.model('Service', ServiceSchema);
