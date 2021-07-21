const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    first_name: {type: String, default: null},
});

module.exports = mongoose.model("account", accountSchema);