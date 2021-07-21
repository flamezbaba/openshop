const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    name: {type: String, default: null},
    password: {type: String, default: null},
    uuid: {type: String, default: null},
    email: {type: String, default: null},
    role: {type: String, default: 'staff'},
});

module.exports = mongoose.model("account", accountSchema);