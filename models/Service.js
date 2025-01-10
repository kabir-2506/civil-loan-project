const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    mobile: { type: String, required: true },
    email: { type: String, required: true },
    type: { type: String, required: true },
    amt: { type: Number, required: true },
    msg: { type: String, required: true },
    code: { type: String, required: true }
});

module.exports = mongoose.model('Request', RequestSchema);
