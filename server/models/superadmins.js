const mongoose = require("mongoose");

const superadmins = mongoose.model('superadmins', new mongoose.Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    type: {
        type: String
    }
}))

exports.superadmins = superadmins;